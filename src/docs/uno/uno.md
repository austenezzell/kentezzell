# Uno Framework
---
Uno comes with our home-baked framework of OOCSS classes and utilities to jump start your site.

### Philosophy
Uno is strictly barebones OOCSS. All of the included classes are designed to offer the least amount of assumptions about what your site looks like. Uno doesn't normalize or reset any CSS.

Uno (by default) strives to compliment the 8pt grid system. This ensures some form of vertical rhythm in your designs. You're welcome to reconfigure this.

### Configuration
Uno's defaults can be tweaked in `src/scss/uno/lib/config`. Setting the variable `$base` to a value other than 16 will scale everything with it, including breakpoints. You can also adjust some typography and grid settings in here. Uno has pretty basic defaults, so you'll likely want to tweak these things first based on your designs.

| Breakpoints    |     
| :------------- | :------------- |
| `xs`    | < 544px    
| `sm`    | 544px - 768px            
| `md`    | 768px - 1024px            
| `lg`    | 1024px - 1280px            
| `xl`    | > 1280px            

Most of Uno's included OOCSS classes are responsive. The base class is for the single, naked mobile breakpoint. You can override the class with the `@sm`, `@md`, `@lg`, and `@xl` classes. For example, `.display-block` can be overridden by `.display-none@md` at the medium breakpoint.
