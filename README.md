# Angular Product Filter App

A product listing page built with Angular that filters products by category using two-way data binding.

---

## Author

**Abanoub Maqqar**  
LinkedIn: https://www.linkedin.com/in/abanoub-maqqar

---

## Overview

This project displays a list of fashion products and allows the user to filter them by category using a dropdown. It is built as a standalone Angular component using Bootstrap for layout.

---

## Concepts Learned

### 1. Two-Way Data Binding — [(ngModel)]

Connects a form element to a component property in both directions. When the user picks a value, the property updates. When the property changes in code, the input reflects it.

```html
<select [(ngModel)]="selectedCatId" (ngModelChange)="onCategoryChange($event)">
```



---

### 2. Event Binding — (ngModelChange)

Fires a function every time the user changes the selected value. Used here to trigger the filter logic.

```ts
onCategoryChange(value: any) {
  if (!value) {
    this.filteredProducts = this.products;
  } else {
    this.filteredProducts = this.products.filter(p => p.catId == +value);
  }
}
```

---

### 3. @for Loop (Angular 17+)

Replaces *ngFor. Loops over an array and renders an element for each item.

```html
@for(prod of filteredProducts; track prod.id) {
  <div class="col">...</div>
}
```

---

### 4. @if / @else (Angular 17+)

Replaces *ngIf. Shows or hides elements based on a condition.

```html
@if(prod.avilableQuantity === 0) {
  <span>Out of Stock</span>
} @else {
  <button>Buy Now</button>
}
```

---

### 5. Property Binding

Binds an HTML attribute to a component value using square brackets.

```html
<option [value]="cat.id">{{ cat.name }}</option>
<input [disabled]="prod.avilableQuantity === 0">
<div [class.bg-danger]="prod.avilableQuantity == 0">
```

---

### 6. Filtering Arrays

Using the built-in .filter() method to return only products that match the selected category.

```ts
this.filteredProducts = this.products.filter(p => p.catId == +value);
```

Note: +value converts the string coming from ngModel into a number.

---

### 7. Template Reference Variables

Using # to get direct access to a DOM element in the template without going through the component.

```html
<input #quantityInp type="number" value="1">
<button (click)="decreaseQuantity(+quantityInp.value, prod.id)">Buy Now</button>
```

---

### 8. ngOnInit Lifecycle Hook

Runs once when the component loads. Used here to set the full product list before any filter is applied.

```ts
ngOnInit() {
  this.filteredProducts = this.products;
}
```

---

### 9. Type Coercion Bug

ngModel on a select always returns a string. Comparing that string to a number with === will always fail.

```ts
// Wrong
this.products.filter(p => p.catId === value)

// Correct
this.products.filter(p => p.catId == +value)
```

---

### 10. Standalone Components

Components with standalone: true do not need an NgModule. All imports are declared directly inside the component decorator.

```ts
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
})
```

---

## Angular Directives Reference

A directive is a class that adds behavior or changes the appearance of a DOM element. The three covered here are attribute directives from @angular/common and @angular/forms.

---

### NgClass — Dynamic CSS Classes

NgClass adds or removes CSS classes on an element based on conditions in the component.

Import:
```ts
import { NgClass } from '@angular/common';
```

Usage:
```html
<!-- Single class -->
<div [ngClass]="'active'">...</div>

<!-- Multiple classes -->
<div [ngClass]="['active', 'highlight']">...</div>

<!-- Conditional classes using an object -->
<div [ngClass]="{ 'active': isActive, 'disabled': isDisabled }">...</div>
```

The object form is the most common. The key is the class name and the value is a boolean. The class is applied only when the value is true.

Project example:
```html
<div class="card h-100" [ngClass]="{ 'bg-danger': prod.avilableQuantity === 0 }">
```

Use [class.x] for a single class. Use NgClass when toggling multiple classes or passing an object from the component.

---

### NgStyle — Dynamic Inline Styles

NgStyle sets one or more inline CSS style properties on an element using a key-value object.

Import:
```ts
import { NgStyle } from '@angular/common';
```

Usage:
```html
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">...</div>
```

From a component method:
```ts
getStyles() {
  return {
    'background-color': this.product.avilableQuantity === 0 ? 'red' : 'white',
    'opacity': this.product.avilableQuantity === 0 ? '0.5' : '1'
  };
}
```
```html
<div [ngStyle]="getStyles()">...</div>
```

Project example:
```html
<img [src]="prod.imgUrl" [ngStyle]="{ 'height': '180px', 'object-fit': 'cover' }">
```

Important: CSS property names with hyphens must be wrapped in quotes inside the object.

```ts
{ 'background-color': 'red' }  // correct
{ background-color: 'red' }    // incorrect
```

Use [style.property] for a single style. Use NgStyle when setting multiple styles or computing them from a method.

---

### NgModel — Two-Way Data Binding

NgModel creates a two-way link between a form input and a component property. It listens for user input and updates the property, and reflects any property change back to the input.

Import:
```ts
import { FormsModule } from '@angular/forms';
```

The [(ngModel)] syntax is shorthand for:
```html
[ngModel]="value"                    <!-- component to view -->
(ngModelChange)="value = $event"     <!-- view to component -->
```

Usage:
```html
<input [(ngModel)]="username" type="text">
<p>Hello, {{ username }}</p>
```

With a change handler:
```html
<select [(ngModel)]="selectedCatId" (ngModelChange)="onCategoryChange($event)">
  <option value="">All</option>
  <option [value]="cat.id">{{ cat.name }}</option>
</select>
```

How it works:
1. User changes the input
2. (ngModelChange) fires and updates the component property
3. [ngModel] reflects the new value back to the view

Common mistakes:
- Forgetting FormsModule in imports — ngModel silently does nothing
- Using [value]="null" on an option — returns the string "null". Use value="" instead
- Comparing number and string with === — use == or convert with +value
- Missing name attribute on inputs inside a form tag

NgModel is best for simple forms and filters. Use Reactive Forms (FormControl) for complex validation and dynamic forms.

---

## Project Structure

```
src/
  app/
    components/
      product/
        product.component.ts
        product.component.html
        product.component.css
    models/
      product.ts
      category.ts
```

---

## Category Mapping

| ID | Category    |
|----|-------------|
| 1  | Clothing    |
| 2  | Accessories |
| 3  | Footwear    |
| 4  | Bags        |

---

## Technologies Used

- Angular 17+ — Standalone components, new control flow syntax
- Bootstrap 5 — UI styling and grid layout
- TypeScript — Typed component logic
- FormsModule — Two-way data binding with ngModel
