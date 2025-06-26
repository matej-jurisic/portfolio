# Adding Caching to a Recursive Fibonacci Function : An Interesting Approach

The Fibonacci sequence is a classic example in computer science that demonstrates both the elegance of recursion and its potential performance pitfalls. In this post, we'll explore how to add caching to an existing Fibonacci implementation without **modifying the original code**, using object-oriented design principles to create an efficient solution.

## The Problem: Exponential Time Complexity

Let's start with our original Fibonacci generator:

```java
class FibonacciGenerator {
    public int getValue(int index) {
        if (index <= 1) {
            return index;
        }
        return getValue(index - 1) + getValue(index - 2);
    }
}
```

This implementation is mathematically correct but computationally inefficient. Each call to `getValue(n)` triggers two recursive calls, creating an exponential time complexity of O(2^n). For small values, this works fine, but calculating `getValue(40)` would require over a billion recursive calls!

The inefficiency stems from redundant calculations. When computing `getValue(5)`, the method calculates `getValue(3)` multiple times independently, wasting computational resources.

Our task is to fix this by adding some type of **caching** functionality. Sounds easy doesn't it? But there is a catch. We are not allowed to change the given `getValue` function in any way, but we still have to use it to calculate the fibonacci related values.

## The Solution: Dynamic Method Dispatch

Here's how we can add caching without touching the original code by creating a new `CachedFibonacciGenerator` class:

```java
class CachedFibonacciGenerator extends FibonacciGenerator {
    private final Map<Integer, Integer> cache = new HashMap<>();

    @Override
    public int getValue(int index) {
        if (cache.containsKey(index)) {
            return cache.get(index);
        }
        int value = super.getValue(index);
        cache.put(index, value);
        return value;
    }
}
```

We now calculate the value using:

```java
FibonacciGenerator cachedGenerator = new CachedFibonacciGenerator();
System.out.println("Cached Fibonacci at position " + index + ": " + cachedGenerator.getValue(index));
```

This elegant solution transforms our O(2^n) algorithm into an O(n) solution without changing the original code.

## How Does It Work?

### 1. **Inheritance and Method Overriding**

The `CachedFibonacciGenerator` extends the original `FibonacciGenerator` class, inheriting all its functionality. By overriding the `getValue` method, we intercept calls to add our caching layer while still leveraging the original logic through `super.getValue(index)`.

### 2. **Proxy Pattern - Caching Proxy**

Our solution is actually an example of the **Proxy Pattern**, specifically a **caching proxy**. The proxy pattern provides a placeholder or surrogate for another object to control access to it. In our case, `CachedFibonacciGenerator` acts as a proxy that:

-   Controls access to the original `getValue` method
-   Caches request results to avoid expensive recomputation
-   Manages the lifecycle of the cache
-   Provides the same interface as the original object

## The Method Call Chain: Understanding the "Loop"

One of the most interesting aspects of this solution is understanding exactly which methods get called and when. Let's trace through the method call chain to see how the overridden method creates a recursive pattern with the original implementation.

### The Call Flow Breakdown

What happens when we call `cachedGenerator.getValue(5)` on our `CachedFibonacciGenerator` instance:

**Step 1**: `CachedFibonacciGenerator.getValue(5)` is called (the overridden version)

-   Checks cache for key `5` - not found
-   Calls `super.getValue(5)` - this calls the **original** `FibonacciGenerator.getValue(5)`

**Step 2**: `FibonacciGenerator.getValue(5)` executes (the original method)

-   Since `5 > 1`, it makes two recursive calls:
    -   `getValue(4)` - but which `getValue` gets called?
    -   `getValue(3)` - but which `getValue` gets called?

**Step 3**: Here's the key insight - **Dynamic Method Dispatch**
Even though we're inside the original `FibonacciGenerator.getValue(5)` method, when it calls `getValue(4)`, Java's dynamic method dispatch ensures it calls the **overridden** version in `CachedFibonacciGenerator`!

This happens because:

-   The actual object type is `CachedFibonacciGenerator`
-   Method calls are resolved at runtime based on the actual object type
-   So `getValue(4)` calls `CachedFibonacciGenerator.getValue(4)`

**Step 4**: The recursive "loop" pattern

```
CachedFibonacciGenerator.getValue(5) calls super.getValue(5)  →  FibonacciGenerator.getValue(5)
    ↓
FibonacciGenerator.getValue(5) calls getValue(4)  →  CachedFibonacciGenerator.getValue(4)
    ↓
CachedFibonacciGenerator.getValue(4) calls super.getValue(4)  →  FibonacciGenerator.getValue(4)
    ↓
FibonacciGenerator.getValue(4) calls getValue(3)  →  CachedFibonacciGenerator.getValue(3)
    ↓
And so on...
```

### Why This "Loop" Is Interesting

This recursive pattern between the proxy and the original implementation is what makes the caching work:

1. **Every recursive call goes through the cache** - Even the internal recursive calls made by the original `FibonacciGenerator` are intercepted by our caching proxy
2. **Future calls benefit immediately** - Once `getValue(3)` is cached, any future call (from any recursion level) returns instantly

### The Power of Dynamic Method Dispatch

This solution works because of Java's **dynamic method dispatch** (also known as late binding). When the original `FibonacciGenerator.getValue()` method calls `getValue()` recursively, it doesn't call itself directly - it calls the method as defined on the actual object instance, which is our `CachedFibonacciGenerator`.

This is why inheritance-based proxies are so powerful: they can intercept not just the initial method call, but all subsequent recursive calls made by the original implementation.

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Date: 26/06/2025
