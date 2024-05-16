---
title: Probability Theory
draft: false
tags: 
  - Mathematics
---

# Probability Theory

## Classical Probability

### Random Experiment

- A _random experiment_ is a procedure that can be infinitely repeated and has a well defined set of more than one possible outcome known as the _sample space_.

- A _trial_ is a particular performance of a random experiment.

- An _outcome_ is a result of a random experiment.

- A _sample space_ is a set usually denoted by $\Omega$ containing the possible outcomes of a random experiment. It can be finite, countably infinite or infinite.

- A sample space $\Omega$ with outcomes $s_{1}, s_{2}, \ldots, s_{n}$ must satisfy the following conditions:

  - The outcomes must be mutually exclusive. If some $s_{i}$ occurs then no $s_{j}$ will take place for $\forall i, j= 1, 2, \ldots, n \quad i \neq j$.
  - The outcomes must be collectively exhaustive.

- An _event_ is a subset of the sample space.

  - If $A, B$ are events then $A \cap B$ and $A \cup B$ are also events.
  - If $A_{1}, A_{2}, \ldots, A_{n}$ are events then $A_{1} \cap A_{2} \cap \ldots \cap A_{n}$ and $A_{1} \cup A_{2} \cup \ldots \cup A_{n}$ are also events.

### Axioms of Probability

We assign a measure $P$ to an event $A$. It must follow some axioms stated below:

1. $P(A) \in [0, 1]$
2. $P(\Omega) = 1$
3. If $A_{1}, A_{2}, \ldots$ are pairwise disjoint events then,  
   $$P(A_{1} \cup A_{2} \cup \ldots ) = P(A_{1}) +  P(A_{2}) + \cdots$$

### Inclusion - Exclusion Principle

For events $A_{1}, A_{2}, \ldots, A_{n}$ we have,

$$
P(\bigcup \limits _{i = 1}^{n} A_{i}) = \sum\limits_{i = 1}^{n}P(A_{i}) - \sum \limits_{i < j}P(A_{i} \cap A_{j}) +   \sum\limits_{i < j < k}P(A_{i}\cap A_{j} \cap A_{k}) - \cdots - (- 1)^{n - 1}P(\bigcap\limits_{i = 1}^{n}A_{i})
$$

### Discrete Probability

Let the sample space, $\Omega$ be a countable set and

$$
\Omega  = \{a_{1}, a_{2}, \ldots\}.
$$

Let $A \subset \Omega$ be an event, then $A$ is also countable. By the third axiom we have,

$$
P(A) = P\left(\bigcup\limits_{a_{i} \in A} \lbrace{a_{i}\rbrace} \right) = \sum\limits_{a_{j} \in A}P(a_{j})
$$

If all outcomes of a finite sample space are equally likely, i.e,

$$
P(a_{i}) = P(a_{j}) \quad \forall \, a_{i}, a_{j} \in \Omega = \{a_{1}, a_{2}, \ldots, a_{n}\}.
$$

Since

$$
P(a_{i}) = \frac{1}{n}
$$

we have,

$$
P(A) = \sum\limits_{a_{j} \in A} \frac{1}{n} = \frac{|A|}{|\Omega|}
$$

### Continuous Probability

Consider a sample space $\Omega = [a, b]$. We can see that $\Omega$ is uncountable. Then

$$
P(c) = 0 \quad \forall c \in [a, b]
$$

### Properties

For any event $A$ we have, $P(A^{c}) = 1 - P(A)$.  
Since $\Omega = A \cup A^{c}$ and $A \cap A^{c} = \phi$. By the third axiom we have,

$$
\begin{matrix}
1 = P(\Omega) &= P(A \cup A^{c}) \\
& = P(A) + P(A^{c})
\end{matrix}
$$

For the empty set $\phi$, i.e, $P(\phi) = 0$  
We know that $\Omega^{c} = \phi$ and $P(\Omega) = 1$. From the previous result, we have

$$
P(\phi) = P(\Omega^{c}) = 1 - P(\Omega) = 1 -1 = 0
$$

Let $A, B$ be two events. Then $P(A - B) = P(A) = P(A \cap B)$  
We can write, $A = (A \cap B) \cup (A \cap B^{c})$ and $(A \cap B) \cap (A \cap B^{c}) = \phi$. Since we know that $A - B = A \cap B^{c}$ we can write,

$$
\begin{align*}
P(A) &= P(A \cap B) \cup (A \cap B^{c})) \\
&= P(A \cap B) + P(A \cap B^{c})
\end{align*}
$$

Let $A, B$ be events such that $A \subseteq B$. Then

$$
P(A) \leq P(B).
$$

### Conditional Probability

If $A, B$ be two events in $\Omega$ then the conditional probability of $A$ _given_ $B$ is

$$
P(A | B) = \frac{P(A\cap B)}{P(B)} \quad P(B) > 0
$$

## Random Variables

The outcomes of random experiments may not always be numerical. A random variable is a tool used to quantify the elements of a sample space.

_Definition_. A _random variable_ is a function $X:\Omega \to \mathbb{R}$ such that for all intervals $A \subseteq \mathbb{R}$ we have,

$$
X^{-1}(A)\in \varepsilon.
$$

### Probability Distribution Function

_Definition_. Let $(\Omega, \varepsilon, P)$ be a probability space and let $X:\Omega \to\mathbb{R}$ be a random variable. The random variable $X$ translates the probability space, $(\Omega, \varepsilon, P)$ to $(\mathbb{R}, \varepsilon_{X}, P_{X})$ where,

$$
\varepsilon_{X} := \left\{ A \subseteq \mathbb{R}\mid X^{-1}(A) \right\}
$$

and the function $P_{X}:\varepsilon_{X} \mapsto [0, 1]$ is defined as

$$
P_{X}(A) := P(P^{-1}(A)) \quad \forall A \in \varepsilon_{X}.
$$

The function $P_{X}$ is called the _probability distribution function_ of $X$.

_Notation_:

- We can use $P_{X}(A)$ and $P(X \in A)$ interchangeably.
- We write $P(X \le a)$ for $P([-\infty, a])$.

_Example_:

$$
X^{-1}\left( (-\infty, a] \right) \in \varepsilon \quad \forall \, a \in \mathbb{R}
$$

_Lemma_ The set $\varepsilon_{X}$ is closed under complementation and countable union.

_Lemma_. Let $(\Omega, \varepsilon, P)$ be a probability space and let $X : \Omega\to \mathbb{R}$ be a random variable and the probability space $(\mathbb{R}, \varepsilon_{X}, P_{X})$ be defined via the random variable $X$. Then we have

$$
\left\{ x \right\} \in \varepsilon_{X} \quad \forall \,x \in\mathbb{R}.
$$

_Proof_. Since $\varepsilon_{X}$ is closed under complementation and countable union and both the sets $(-\infty, x)$ and $(x, \infty)$ belong to $\varepsilon_{X}$, it follows that

$$
\left\{ x \right\} = \left[ x, x \right] = \left( \left( - \infty, x \right) \cup \left( x, \infty \right) \right)^{c} \in \varepsilon_{X} \quad \, \forall x \in \mathbb{R}.
$$

_Corollary_. For a random variable $X$, $P(X = x)$ is well defined for all $x \in \mathbb{R}$.

_Definition_. Let $X$ be a random variable. The function $p:\mathbb{R}\to \left[ 0,1 \right]$ defined as

$$
p\left( x \right) := P\left( X = x \right)
$$

is called the _probability mass function_ (PMF) of $X$.

### Cumulative Distribution Function

D_efinition._ Let $X$ be a random variable. The _cumulative distribution function_ (CDF) of $X$ is defined as

$$
F_{X}\left( a \right) := P\left( X \leq a \right) \quad \forall \, a\in\mathbb{R}.
$$

_Lemma_. The CDF of a random variable is a non-decreasing function.

_Proof_. Let $a \leq b$. We have

$$
X^{-1}((-\infty, a]) \subseteq X^{-1} ((-\infty, b]).
$$

Hence, we obtain

$$
F_{X}(a) = P(X\leq a) \leq P(X\leq b)=F_{X}(b) \quad \forall \,a,b \in \mathbb{R}, \, a \leq b.
$$

_Example_. Let $X$ denote the number of heads obtained in a toss of a fair coin. Determine the CDF of $X$.

_Solution_. We have $P(X<0) = P(0<X<1) = P(X>1) = 0$ and $P(X = 0) = P(X = 1) = 1/2$. Hence the CDF of $X$ is given as

$$
F_{X}(x) =
\begin{cases}
0, & x < 0 \\
1 / 2, & 0 \leq x < 1 \\
1 & x \geq 1.
\end{cases}
$$

_Theorem_. The CDF of every random variable is right continuous.

_Proof_. 

_Corollary_. The CDF $F_{X}$ of a random variable $X$ is continuous if and only if $F_{X}$ is left continuous.

_Proof_. Since, the CDF is right continuous, if CDF is left continuous then CDF is continuous. The converse is trivially true.
## Markov Chains

_Definition_. Let $\left\{ X_{{n}} \right\}_{n = 0}^{(\infty)}$ be a sequence of random variables taking values in $\left\{ 0, 1, \dots, N \right\}$. The _Markov Property_ states

$$
P(X_{n + 1} = s_{n + 1} \mid X_{n} = s_{n}, X_{n - 1}= s_{n - 1}, \dots, X_{0}= s_{0}) = P(X_{n + 1} = s_{n + 1}\mid X_{n} = s_{n}).
$$

If $\left\{ X_{n} \right\}_{n = 0}^{\infty}$ satisfies the Markov property then we call $\left\{ X_{n} \right\}_{n = 0}^{\infty}$ a Markov Chain and if $X_{n} = s$ for some $n$, then we say that the system is at _state_ $s$ at time $n$.

### Transitional Probabilities

We call the probability of the system to be at state $j$ at time $n + 1$ given the $n$th state is $i$, i.e, $P(X_{n + 1}= j \mid X_{n} = i)$ as _transition probabilities_. If they are independent of $n$ then these are called _stationary_ transition probabilities.

$$
\begin{align}
p_{ij} &= P(X_{n + 1}= j \mid X_{n} = i) \\
&= P(X_{1}= j \mid X_{0} = i)
\end{align}
$$

_Definition_. The Transition Probability Matrix is defined as

$$
\mathbb{P} =
\begin{pmatrix}
p_{00} & p_{01} & \cdots & p_{0N} \\
\vdots & \vdots & & \vdots \\
p_{N0} & p_{N1} & \cdots & p_{NN}
\end{pmatrix}.
$$

_Lemma_. Each row of the stochastic matrix $\mathbb{P}$ sums to $1$.  
_Proof_. We have,

$$
\begin{align}
\sum \limits_{j = 0}^{N}p_{ij} &= \sum\limits_{j = 0}^{N}P(X_{1} = j | X_{0} = i) \\
&= \frac{1}{P(X_{0}= i)} \sum\limits_{j = 0}^{N}P(X_{1} = j, X_{0} = i) \\
&= \frac{P(X_{0} = i)}{P(X_{0} = i)} = 1
\end{align}
$$

