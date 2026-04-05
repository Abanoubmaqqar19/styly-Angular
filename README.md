# Styly Angular Shopping App

A standalone Angular shopping app that shows product listings, category filtering, and nested product detail routing.

## Project Summary

Styly is an Angular 19 app built with standalone components and Bootstrap. It includes:

- Category filtering for products
- Child routing under `/orders`
- Product detail page for a selected item
- API-backed services for categories and courses/products
- Reactive HTTP data fetching using Angular's `HttpClient`

## Key Features

- `GET /category` API to load categories
- `GET /product` API to load product/course items
- `GET /product?catId={id}` to filter by category
- `GET /product/{id}` to load a detailed product page
- `POST /product` to add a new product/course
- Nested route structure: `/orders` and `/orders/product/:id`
- Standalone Angular components without NgModules
- Bootstrap 5 UI for responsive product cards

## Architecture

### Routing

Routes are defined in `src/app/app.routes.ts`:

- `/home` → `HomeComponent`
- `/about` → `AboutUsComponent`
- `/contact` → `ContactUsComponent`
- `/orders` → `OrderComponent`
  - child `''` → `ProductListComponent`
  - child `product/:id` → `ProductDetailComponent`
- `**` → `NotfoundComponent`

### Root Configuration

`src/app/app.config.ts` configures providers for:

- Angular router
- HTTP client
- zone change detection

### Components

- `AppComponent` — application shell with navbar/footer and router outlet
- `OrderComponent` — parent route for order views and child outlet
- `ProductListComponent` — category selector and product list renderer
- `ProductComponent` — product cards and actions
- `ProductDetailComponent` — single product detail display
- `NavbarComponent`, `FooterComponent`, `HomeComponent`, `AboutUsComponent`, `ContactUsComponent`, `NotfoundComponent`

### Models

- `src/models/category.ts` — `Category` interface
- `src/models/course.ts` — `Course` interface representing product items
- `src/models/product.ts` — existing product model used by legacy service

### Services

#### `CategoryService`

- `getAllCategories()`

Fetches categories from:

`https://69d268805043d95be971da27.mockapi.io/category`

#### `CourseService`

- `getAllCourses()`
- `getCoursesByCategoryID(catID)`
- `getCourseByID(cID)`
- `addCourse(course)`

Uses the API endpoint:

`https://69d268805043d95be971da27.mockapi.io/product`

#### Legacy services

- `ProductServiceService` contains static product data
- `CategorServService` contains static category data

These remain in the project but modern app flows use the API-backed services.

## Setup

```bash
cd styly
npm install
npm start
```

Then open the app at:

```bash
http://localhost:4200
```

## Build

```bash
npm run build
```

## Notes

- The app uses standalone components (`standalone: true`) instead of NgModules.
- `provideHttpClient()` is enabled in `src/app/app.config.ts` to support HTTP API calls.
- The app uses `RouterOutlet` inside `OrderComponent` to render nested child routes.

## Folder Structure

```text
src/
  app/
    app.component.ts
    app.config.ts
    app.routes.ts
    components/
      about-us/
      contact-us/
      footer/
      home/
      navbar/
      notfound/
      order/
      product-detail/
      product-list/
  components/
    product/
  models/
    category.ts
    course.ts
    product.ts
  services/
    categoryService/
      category.service.ts
    courseService/
      course.service.ts
    categoresService/
      categor-serv.service.ts
    productService/
      product-service.service.ts
```

## Useful Commands

- `npm start` — run development server
- `npm run build` — build production bundle
- `npm test` — run unit tests

## Author

Abanoub Maqqar

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
<img [src]="prod.imgUrl" [ngStyle]="{ 'height': '180px', 'object-fit': 'cover' }" />
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
import { FormsModule } from "@angular/forms";
```

The [(ngModel)] syntax is shorthand for:

```html
[ngModel]="value"
<!-- component to view -->
(ngModelChange)="value = $event"
<!-- view to component -->
```

Usage:

```html
<input [(ngModel)]="username" type="text" />
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

| ID  | Category    |
| --- | ----------- |
| 1   | Clothing    |
| 2   | Accessories |
| 3   | Footwear    |
| 4   | Bags        |

---

## Technologies Used

- Angular 17+ — Standalone components, new control flow syntax
- Bootstrap 5 — UI styling and grid layout
- TypeScript — Typed component logic
- FormsModule — Two-way data binding with ngModel
