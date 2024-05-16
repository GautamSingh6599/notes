---
title: Real Analysis
draft: false
tags: 
    - Mathematics
---

# Real Analysis

## Real Number System

We make the following assumptions:

- $\mathbb{N}$ is the set of the *natural numbers*.
- $\mathbb{Z}$ is the set of *integers*.
- $\mathbb{Q}$ is the set of *rational numbers*.
- $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$
- Addition and Multiplication ($+, *$) of two natural numbers, integers and rationals is well defined.
- We know the order relation $m < n$ between two integers and rationals.

## Differentiable Functions

Start with an interval $L$. A function $f:J \mapsto \mathbb{R}$ is *differentiable* at a point $c \in J$ if the following limit exists

$$
\lim_{ x \mapsto c } \frac{f(x) - f(c)}{x - c}. 
$$
We denote this quantity as
$$
f'(c) = \lim_{ x \mapsto c } \frac{f(x) - f(c)}{x - c}. 
$$

More precisely, there exists $\alpha \in \mathbb{R}$ such that for any $\epsilon > 0$ there exists $\delta > 0$ so that the following conditions hold

$$
\forall x \in (c - \epsilon, c + \epsilon), \quad |f(x) - f(c) - \alpha(x - c)| < \epsilon \, |x - c|. 
$$
Theorem 1

The following statement is equivalent to saying that a function $f$ is differentiable some $c \in J$. 

- Suppose that there exists a function $f_{1}: J \mapsto \mathbb{R}$ which satisfies the following condition 
$$
f(x) = f(c) + f_{1}(x)(x - c) \quad \forall x\in J.
$$
- Also $f_{1}$ is continuous at $c$.

Then $f$ is differentiable at $c$ and $f'(c) = f_{1}(c)$.

Also if $f_{1}$ and $f$ satisfy the above conditions then 
$$
f_{1}(x) = \frac{f(x) - f(c)}{x - c} \quad \text{for }x \neq c
$$
Theorem 1 also shows that a differentiable function is also continuous.

We can also see that differentiability at a point is a local phenomenon (obviously!) and we need not know the function over it's whole domain. Just knowing the function over a neighbourhood suffices for our objective (which is to determine differentiability).  
Local Minima

For a function $f$ defined over an interval $J$ a point $c \in J$ is a *point of local minima* if there exists a $\delta > 0$ such that
$$
f(c) \leq f(x) \quad \forall x \in (c - \delta, c + \delta)\cap J 
$$
Points of local maxima can be similarly constructed.

 Global Minima

A *global minima* for a function defined over an interval $J$ is some point $c \in J$ for which the following is true
$$
f(c) \leq f(x) \quad \forall x \in J 
$$
A *global maxima* can be similarly constructed.

A global minima might not be a local minima. For example,

 Theorem 1

Suppose $c \in J$ is a point of local minima for a differentiable function $f$ defined on $J$. Then 
$$
f'(c) = 0
$$
However, for a global minima the derivative need not vanish.  
 2nd Order Derivative

A function $f$ over an interval $J$ is twice differentiable at some $c \in J$ if $f$ is differentiable in $(c - \delta, c + \delta) \cap J$ for some $\delta>0$ and the function $f':(c-\delta, c+\delta)\cap J \to \mathbb{R}$ is differentiable at $c$. We denote the second order derivatives as $f''$.

 nth Order Derivatives

A function $f$ over an interval $J$ is said to be $n$ times differentiable at some $c \in J$ if $f^{n-1}$ exists on $(c- \delta, c+\delta)\cap J$ for some $\delta > 0$ and $f^{n-1}:(c-\delta, c+\delta)\cap J$ is differentiable at $c$.

A function $f$ is *smooth* and *infinitely differentiable* if $f^{n}$ exists for all $n \in mathbb{N}$. 

**Assumption**: To define integration over a function $f:[a, b] \to \mathbb{R}$, we assume that $f$ is bounded.

**Notation:** For a bounded function $f:[a, b]\to \mathbb{R}$, we define 

$$
\begin{align}
m &:= \inf\{f(x): x \in [a, b]\}
\\ M &:= \sup \{f(x): x \in [a, b]\}
\end{align}
$$

Let $D = \{x_{0}, x_{1}, \dots, x_{n}\}$ be a partition of $[a, b]$. We define $m_{i}$ and $M_{i}$ as 

$$
\begin{align}  
m_{i} &:= \inf\{f(x): x \in [x_{i}, x_{i + 1}]\} \\ \\  
M_{i} &:= \sup\{f(x): x \in [x_{i}, x_{i + 1}]\}  
\end{align}
$$

We can say that $m_{i} \le M_{i} \quad \forall i = 0, 1, 2, \dots, n$.
 Inverse Function Theorem

Assume that $f$ is continuously differentiable over $(a, b)$ such that $f'(x) \neq 0 \quad \forall x \in (a, b)$. Then $f$ is strictly monotone and $f((a, b))$ is an interval.
Also $f^{-1}$ exists satisfying 

$$
(f^{-1})'(y) = \frac{1}{f^{-1}(f(y))} \quad \forall y \in f((a, b))
$$

L'Hospital's Rule

Suppose $f, g$ are differentiable functions over $J \backslash \{a\}$ where $J$ is an interval and $\{a\}$ is an endpoint of $J$ and could be equal to $\infty$ or $-\infty$. Also $g(x) \neq 0 \neq g'(x) \quad \forall x \in J \backslash \{a\}$. Assume that $\lim_{ x \to a } f(x) = \lim_{ x \to a } g(x) = A$ where $A$ is either $0$ or $\infty$.

If $\lim_{ x \to a }(f'(x) / g'(x))$ exists then 
$$
\lim_{ x \to a }\frac{f(x)}{g(x)} =\lim_{ x \to a }\frac{f'(x)}{g'(x)} 
$$

Lagrange's Mean Value Theorem

Suppose $f:[a, b] \mapsto \mathbb{R}$ is function differentiable on $(a, b)$ and continuous on $[a, b]$ then there exists $c \in (a, b)$ such that 

$$
\frac{f(b) - f(a)}{b - a} = f'(c)
$$

Leibniz Formula

Suppose $f, g$ are $n$ times differentiable functions. Then the following holds true 
$$
(fg)^{(n)}(x) = \sum\limits_{k = 1}^{n}{n \choose k}f^{(k)}(x)g^{(n - k)}(x)
$$
Algebra of Differentiable Functions

Suppose that we have two real valued functions $f, g$ over an interval $J$  that are differentiable at some $c \in J$. Then $f, g$ satisfy several algebraic properties

- The sum of two differentiable functions is differentiable 
$$
(f + g)'(c) = f'(c) + g'(c)
$$
- If $\alpha$ is a real number then $\alpha f$ is differentiable and 
$$
(\alpha f)'(c) = \alpha f'(c)
$$
- The product of two differentiable functions is also differentiable 
$$
(fg)'(c) = f(c)g'(c)+ f'(c)g(c)
$$
- If a function $f$ is never equal to zero and is differentiable then $1 / f$ is also differentiable 
$$
\left(\frac{1}{f} \right)'(c) = - \frac{f'(c)}{f(c)^2} 
$$

Chain Rule

Suppose $f$ is a function over the interval $J$ that is differentiable at some $c \in J$ . Similarly $g$ is a function over the set $J_{1}$ such that $f(J) \subseteq J_{1}$ and $g$ is differentiable over $f(c)$ then
$$
(g \circ f)'c = g'(f(c))f'(c)
$$

Theorem 1

Suppose $f$ is a differentiable function over the interval $J$ such that 
$$
f'(x) = 0 \quad \forall x \in J.
$$
Then $f$ is a constant function.

Theorem 2

Suppose $f$ is differentiable over an interval $J$ such that
$$
f'(x) \geq 0 \quad \forall x \in J.
$$
Then $f$ is increasing on the interval $J$.

Theorem 3

Suppose $f$ is differentiable over an interval $J$ such that
$$
f'(x) \leq M \quad \forall x \in J
$$
for some $M \geq 0$ then $f$ is Lipschitz continuous.

Cauchy's Mean Value Theorem

Suppose $f, g$ be two functions that are differentiable on $(a, b)$ and continuous on $[a, b]$. Also assume that $g(x) \neq 0 \quad \forall x \in (a, b)$. The there exists $c in (a, b)$ such that 

$$
\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}
$$

Suppose $f$ is a function on $[a, b]$. We call $f$ *convex* if an only if for all $t \in [a, b]$ and for all $x, y \in [a, b]$ 
$$
f(t x + (1 - t) y) \le tf(x) + (1 - t)f(y).
$$

Theorem 1

A function $f$ over $[a, b]$ is convex if and only if the following holds true 
$$
\frac{f(z) - f(x)}{z - x} \le \frac{f(y) - f(x)}{y - x} \le \frac{f(y) - f(z)}{y - z}
$$
for all $x, y, z \in [a, b]$ and $x < z < y$.

T
heorem 2

A differentiable function $f$ is convex if and only if $f'$ is increasing.

Theorem 3

A differentiable function $f$ is convex if and only if the following holds true
$$
f(x) \ge f(y) + f'(y) (x - y) \quad \forall x, y \in[a, b].
$$

Rolle's Theorem

Suppose $f:[a, b] \mapsto \mathbb{R}$ is a differentiable function on $(a, b)$ and continuous on $[a,b]$. Also, $f(a) = f(b)$ then there exists $c \in (a, b)$ such that 
$$
f'(c) = 0
$$  
Let $f:[a, b] \to \mathbb{R}$ be a given function. Let $P$ be a partition and $T$ be a tag of $P$ the Riemann sum is defined as 
$$
S(f, P, T) = \sum\limits_{i = 0}^{n - 1} f(t_{i}) (x_{i + 1} - x_{i})
$$
Let $P = \{x_{0}, x_{1}, \ldots, x_{n}\}$ be a partition. A set $T = \{t_{0}, t_{1}, \ldots, t_{n-1}\}$ is a tag of $P$ if 
$$
t_{i} \in [x_{i}, x_{i + 1}] \quad \forall i= 0, 1, \ldots, n - 1
$$
Taylor's Theorem

Suppose $f$ is function on $[a, b]$ such that $f^{(n)}$ is continuous on $[a, b]$ and $f^{(n + 1)}$ exists on $(a, b)$. Then for any $x, x_{0} \in [a, b]$ such that $x \neq x_{0}$ there exists $c$ between $x$ and $x_{0}$ such that the following holds true 
$$
f(x) = f(x_{0}) + \sum \limits_{k = 1}^{n + 1}f^{(k)}(x_{0})\frac{(x - x_{0})^{k}}{k!}
$$

## Integration

A finite set $P = \lbrace{x_{0},x_{1},\dots,x_{n}\rbrace}$ is said to be a *partition* of an interval $[a,b]$ if

$$
a = x_{0}<x_{1}<\dots<x_{n}=b.
$$

Let $P, Q$ be two partitions of $[a,b]$. We say that $Q$ is a *refinement* of $P$ if $P \subseteq Q$. To define the integration of any function$f:[a,b]\to \mathbb{R}$, we assume that $f$ is bounded. 

Let $f:[a,b]\to \mathbb{R}$ be a bounded function. Define $m, M$ as follows:

$$
\begin{align}
m = \inf \lbrace{f(x)\, |\,x \in [a,b]\rbrace}  \\
M = \sup \lbrace{f(x)\, |\,x \in [a,b]\rbrace} 
\end{align}
$$

Let $P = \lbrace{x_{0}, x_{1},\dots,x_{n}\rbrace}$ be a partition of $[a,b]$. We define for $i = 0, 1, \dots, n - 1$

$$
\begin{align}
m_{i}(f) = \inf\left\{ f(x)\mid x \in[a,b]  \right\} \\
M_{i}(f) = \sup \left\{ f(x)\mid x \in [a, b] \right\}  
\end{align}
$$

We can say 

$$
m_{i}(f) \leq M_{i}(f) \quad  \forall \, i = 0,1, \dots, n - 1. 
$$

Let $f: [a, b]\to \mathbb{R}$ be a bounded function. Let $P = \left\{ x_{0}, x_{1}, \dots, x_{n} \right\}$ be a partition of $f$. We define the *upper sum* as 

$$
U(f, P) = \sum \limits_{i = 0}^{n - 1}M_{i}(f)(x_{i + 1}- x_{i}),
$$

similarly *lower sum* can be defined as

$$
L(f, P) = \sum \limits_{i = 0}^{n - 1}m_{i}(f)(x_{i + 1}- x_{i})
$$
Let $f:[a, b]\to \mathbb{R}$ be a bounded function. Then 

$$
m(b - a) \leq L(f, P) \leq U(f, P) \leq M(b - a)
$$

for all partitions $P$ of $[a, b]$.  
Let $P = \{x_{0}, x_{1}, \dots, x_{{n}}\}$ be a partition of $[a, b]$. The proof follows from 

$$
m \leq m_{i} \leq M_{i} \leq M \quad \forall \, i = 0, 1, \dots, n - 1.
$$

A bounded function $f$ over $[a, b]$ is called *Darboux integrable* if 
$$
U(f) = L(f)
$$

We say 
$$
\int\limits_{a}^{b}  f \, dx = U(f) = L(f) 
$$
 Theorem 1

Suppose $P$ and $Q$ are partitions of $[a, b]$ and $P \subseteq Q$. Then for a bounded function $f$ over $[a, b]$ the following holds true
$$
L(f, P) \le L(f, Q) \le U(f, Q) \le U(f, P)
$$ 
 Theorem 2

Let $P, Q$ be partitions of $[a, b]$. Then for any $f:[a, b] \to \mathbb{R}$ the following holds true  
$$
L(f, P) \le U(f, Q)
$$

 Theorem 3 
$$
L(f) \le U(f)
$$

Theorem 4  
A function $f:[a, b] \to \mathbb{R}$ is *Darboux integrable* if $U(f) = L(f)$ or given $\epsilon > 0$ there exists a partition $P_{\epsilon}$ of $[a, b]$ such that the following holds true
$$
|U(f, P_{\epsilon}) - L(f, P_{\epsilon})| < \epsilon
$$
 Theorem 5  
A function $f:[a, b] \to \mathbb{R}$ is monotone then $f$ is integrable.

 Theorem 6

A function $f:[a, b] \to \mathbb{R}$ is continuous then $f$ is integrable.


 Theorem 7

Let $f[a,b] \to \mathbb{R}$ be bounded such that it is continuous over $[a, b]$ except at some $c \in (a, b)$ then $f$ is integrable.

 Theorem 8

Let $f[a,b] \to \mathbb{R}$ be bounded such that it is continuous over $[a, b]$ except at finitely many points in $[a, b]$ then $f$ is integrable.

 Theorem 9 

Thomae's function is integrable over $[0, 1]$.

$\mathfrak{R}([a, b]) := \{f:[a, b] \to \mathbb{R}: f \text{ is bounded and integrable}\}$

 Theorem 10

- If $f, g \in \mathfrak{R}([a, b])$ then $f+g \in \mathfrak{R}([a, b])$.
- If $f \in \mathfrak{R}([a, b])$ then $cf \in \mathfrak{R}([a, b]) \quad \forall c \in \mathbb{R}$.
- The map $T: \mathfrak{R}([a, b]) \to \mathbb{R}$ is defined by 

$$
T(f) = \int \limits_{a}^{b}f \, dx 
$$ 

is linear


Theorem 11

Let $f, g:[a, b] \in \mathbb{R}$ be integrable functions such that 
$$
f \le g
$$
then 
$$
\int \limits *{a}^{b} f\, dx \le \int \limits *{a}^{b} g \, dx  
$$  
Theorem 12

Let $f:[a, b] \to \mathbb{R}$ be integrable. Assume that $m < f(t) < M \quad \forall t \in[a, b]$. Let $g:[m, M] \to \mathbb{R}$ be continuous. Then $g\circ f$ is integrable.

Theorem 13

Assume that $f_{1}, f_{2}:[a, b]\to\mathbb{R}$ are integrable. Then the following are integrable:
- $|f_{1}|$
- $f_{1}^{2}$
- $f_{1}f_{2}$
- $\max{f_{1}, f_{2}}$
- $\min{f_{1}, f_{2}}$

Theorem 14

If $f$ is integrable on $[a, b]$ then $f$ is integrable on $[c, d]$ where $[c, d] \subset [a, b]$. Moreover 
$$
\int \limits*{a}^{b}f \, dx = \int \limits*{a}^{c}f \, dx + \int \limits_{c}^{b}f \, dx  
$$ 
Let $f:[a, b] \to \mathbb{R}$ is integrable we define 
$$
\int \limits_{a}^{b}f \, dx = -\int \limits_{b}^{a}f \, dx  
$$
Also 
$$
\int \limits^{s}*{s}f \, dx = 0 \quad s \in[a, b] 
$$

 Theorem 15

If $f:[a, b] \to \mathbb{R}$ is integrable then 
$$
\int \limits*{x}^{y}f \, dx = \int \limits_{x}^{z}f \, dx + \int \limits_{z}^{y}f \, dx \quad x, y, z \in [a, b]
$$

 Theorem 16

If $f:[a, b] \to \mathbb{R}$ is integrable then 
$$
\left|\int \limits_{a}^{b}f \, dx \right| \le \int \limits_{a}^{b} |f| \, dx 
$$
Darboux Theorem

Suppose $f$ is a differentiable function over $[a, b]$ such that $f'(a) < \lambda < f'(b)$ for some $\lambda$ then there exists $c \in (a, b)$ such that 
$$
f'(c) = \lambda
$$



A function $f$ is Riemann integrable if there exists $A$ such that for every $\epsilon > 0$ there exists a partition $P_{\epsilon}$ such that
$$
|S(f, Q, T) - A| < \epsilon 
$$ 
for all partition $Q \supseteq P$ and for all tag $T$ of $Q$.

Theorem 1
Assume $f$ is Riemann integrable. If $A_{1}, A_{2}$ satisfy the conditions for Riemann integrability then 
$$
A_{1} = A_{2}
$$

 Theorem 2
Let $f$ be Riemann integrable. Then $f$ is bounded.

 Theorem 3
A bounded function $f:[a, b]\to \mathbb{R}$ is Darboux integrable if and only if $f$ is Riemann integrable. Moreover 
$$
\mathfrak{R}(f) = \int \limits_{a}^{b}f \, dx 
$$

We define the upper integral as $U(f)$ as 
$$
U(f) := \inf\{U(f, P): P \text{ is a partition of } [a, b]\}
$$
similarly the lower integral is defined as 
$$
L(f) := \inf\{L(f, P): P \text{ is a partition of } [a, b]\}
$$

The upper sum $U(f, P)$ of a bounded function $f$ with respect to a partition $P = \{x_{0}, x_{1},\ldots, x_{n}\}$ is defined as
$$
U(f, P) := \sum\limits_{i = 0}^{n} M_{i}(f)(x_{i + 1} - x_{i})
$$
similarly the lower sum can be defined as 
$$
L(f, P) := \sum\limits_{i = 0}^{n} m_{i}(f)(x_{i + 1} - x_{i})
$$

Theorem 1

For any bounded function $f:[a, b] \to \mathbb{R}$ the following holds true
$$
m(b - a) \le L(f, P) \le U(f, P) \le M(b - a)
$$ 

for all partitions $P$ of $[a, b]$.

### Improper Integral
## Sequence of Functions

Let $X \subseteq \mathbb{R}$. Let $f_{n}:X \to \mathbb{R}$ be a function for all $n \in \mathbb{N}$. We then say that $\left\{ f_{n} \right\}$ is a *sequence of functions* on $X$.

*Example.* 
- Let $X = \left[ 0, 1 \right]$. Define $f_{n} = x^{n} \quad \forall x \in X$. Then $\left\{ f_{n} \right\}$ is a sequence of functions on $X$.
- Let $X = \mathbb{R}$. Define $f_{n}(x) = \max \left\{ x, n \right\} \quad \forall x \in X$. Then $\left\{ f_{n} \right\}$ is a sequence of functions on $X$.

*Definition*. (**Point-wise Convergent**) Let $\left\{ f_{n} \right\}$ be a sequence of functions. We say that $f_{n}$ is point-wise convergent to a function $f:X\to \mathbb{R}$ if for all $x \in X$, the sequence $f_{n}$ converges to $f$.

*Definition*. (**Uniform Convergence**) Le $f_{n}$ be a sequence of functions on $X$. We say that $f_{n}$ converges to $f$ uniformly if for each $\varepsilon > 0$, there exists $k \in \mathbb{N}$ such that 

$$
\left| f_{n}(x) - f(x)  \right| < \varepsilon \quad \forall \, x \in X, \, n > k
$$

*Remark*. If $f_{n}$ converges to $f$ uniformly then $f_{n}$ converges to $f$ point-wise.

*Theorem*. (**Equivalent Criteria for Uniform Convergence**)


