# Dodavanje Cachea Rekurzivnoj Fibonacci Funkciji: Zanimljiviji Pristup

Fibonaccijev niz klasičan je primjer u računarstvu koji demonstrira rekurziju i njezine potencijalne probleme s performansama. Ovdje ćemo istražiti kako dodati caching postojećoj Fibonacci implementaciji **bez modificiranja originalnog koda**, koristeći principe objektno orijentiranog dizajna.

## Problem: Eksponencijalna Vremenska Složenost

Započnimo s našim originalnim Fibonacci generatorom:

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

Ova je implementacija matematički ispravna, ali računalno neučinkovita. Svaki poziv `getValue(n)` pokreće dva rekurzivna poziva, stvarajući eksponencijalnu vremensku složenost od O(2^n). Za male vrijednosti to funkcionira dobro, ali izračun `getValue(40)` zahtijevao bi preko milijardu rekurzivnih poziva\!

Neučinkovitost proizlazi iz redundantnih izračuna. Prilikom izračunavanja `getValue(5)`, metoda izračunava `getValue(3)` više puta neovisno, trošeći računalne resurse.

Naš zadatak je to popraviti dodavanjem neke vrste **cachinga**. Zvuči lako, zar ne? Ali postoji kvaka. Zamislimo da nam nije dopušteno mijenjati zadanu funkciju `getValue` ni na koji način, ali je ipak moramo koristiti za izračunavanje vrijednosti povezanih s Fibonaccijem.

## Rješenje: Dinamičko Prosljeđivanje Metoda

Evo kako možemo dodati caching bez diranja originalnog koda stvaranjem nove klase `CachedFibonacciGenerator`:

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

Sada izračunavamo vrijednost pomoću:

```java
FibonacciGenerator cachedGenerator = new CachedFibonacciGenerator();
System.out.println("Cached Fibonacci at position " + index + ": " + cachedGenerator.getValue(index));
```

Ovo elegantno rješenje transformira naš algoritam O(2^n) u rješenje O(n) bez mijenjanja originalnog koda.

## Kako To Funkcionira?

### 1\. **Nasljeđivanje I Nadjačavanje Metoda**

`CachedFibonacciGenerator` proširuje originalnu klasu `FibonacciGenerator`, nasljeđujući svu njezinu funkcionalnost. Nadjačavanjem metode `getValue` presrećemo pozive kako bismo dodali naš caching sloj dok i dalje koristimo originalnu logiku putem `super.getValue(index)`.

### 2\. **Proxy Uzorak - Caching Proxy**

Naše rješenje je zapravo primjer **Proxy Uzorka**, točnije **Caching Proxy**. Proxy uzorak pruža rezervirano mjesto ili surogat za drugi objekt kako bi se upravljalo pristupu njegovih metoda. U našem slučaju, `CachedFibonacciGenerator` djeluje kao proxy koji:

-   Kontrolira pristup originalnoj metodi `getValue`
-   Sprema rezultate zahtjeva kako bi se izbjeglo skupo ponovno izračunavanje
-   Upravlja životnim ciklusom cache memorije
-   Pruža isto sučelje kao i originalni objekt

## Lanac Poziva Metoda: Razumijevanje "Petlje"

Jedan od najzanimljivijih aspekata ovog rješenja je razumijevanje koje se metode pozivaju i kada. Pratimo lanac poziva metoda kako bismo vidjeli kako nadjačana metoda stvara rekurzivni uzorak s originalnom implementacijom.

### Rastav Poziva

Što se događa kada pozovemo `cachedGenerator.getValue(5)` na našoj instanci `CachedFibonacciGenerator`:

**Korak 1**: Poziva se `CachedFibonacciGenerator.getValue(5)` (nadjačana verzija)

-   Provjerava cache za ključ `5` - nije pronađen
-   Poziva `super.getValue(5)` - ovo poziva **originalni** `FibonacciGenerator.getValue(5)`

**Korak 2**: Izvršava se `FibonacciGenerator.getValue(5)` (originalna metoda)

-   Budući da je `5 > 1`, vrši dva rekurzivna poziva:
    -   `getValue(4)` - ali koja se `getValue` poziva?
    -   `getValue(3)` - ali koja se `getValue` poziva?

**Korak 3**: Evo ključnog uvida - **Dinamičko Prosljeđivanje Metoda**
Iako smo unutar originalne metode `FibonacciGenerator.getValue(5)` kada ona poziva `getValue(4)`, dinamičko prosljeđivanje metoda osigurava pozivanje **nadjačane** verzije u `CachedFibonacciGenerator`\!

To se događa jer:

-   Stvarni tip objekta je `CachedFibonacciGenerator`
-   Pozivi metoda razrješavaju se tijekom izvođenja na temelju stvarnog tipa objekta
-   Dakle, `getValue(4)` poziva `CachedFibonacciGenerator.getValue(4)`

**Korak 4**: Rekurzivni uzorak "petlje"

```
CachedFibonacciGenerator.getValue(5) calls super.getValue(5)  →  FibonacciGenerator.getValue(5)
    ↓
FibonacciGenerator.getValue(5) calls getValue(4)  →  CachedFibonacciGenerator.getValue(4)
    ↓
CachedFibonacciGenerator.getValue(4) calls super.getValue(4)  →  FibonacciGenerator.getValue(4)
    ↓
FibonacciGenerator.getValue(4) calls getValue(3)  →  CachedFibonacciGenerator.getValue(3)
    ↓
I tako dalje...
```

### Zašto Je Ova "Petlja" Zanimljiva

Ovaj rekurzivni uzorak između proxyja i originalne implementacije je ono što omogućuje pamćenje prethodno izračunatih rezultata:

1.  **Svaki rekurzivni poziv prolazi kroz cache** - Čak i interni rekurzivni pozivi koje vrši originalni `FibonacciGenerator` presreće naš caching proxy
2.  **Budući pozivi odmah koriste** - Jednom kada se `getValue(3)` spremi, svaki budući poziv (s bilo koje razine rekurzije) vraća se odmah

### Snaga Dinamičkog Prosljeđivanja Metoda

Ovo rješenje funkcionira zbog **dinamičkog prosljeđivanja metoda** u Javi (također poznatog kao kasno povezivanje). Kada originalna metoda `FibonacciGenerator.getValue()` rekurzivno poziva `getValue()`, ona ne poziva sebe izravno - ona poziva metodu definiranu na stvarnoj instanci objekta, a to je naš `CachedFibonacciGenerator`.

Zato su proxyji temeljeni na nasljeđivanju korisni: mogu presresti ne samo početni poziv metode, već i sve naknadne rekurzivne pozive koje izvršava originalna implementacija.

---

Autor: _Matej Jurišić_
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Datum: 26. 06. 2025.
