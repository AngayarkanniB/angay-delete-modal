
# 📦 @angay/delete-modal

A lightweight, reusable Angular **delete confirmation modal** component with service-based control.

---

## 🚀 Installation

```bash
npm install @angay/delete-modal
```

or with yarn

```bash
yarn add @angay/delete-modal
```

---

## 🛠️ Usage

### 1. Import the component

Since the modal is **standalone**, you can directly import it into your module/component:

```ts
import { DeleteModalComponent } from '@angay/delete-modal';
```

Then declare it inside your template:

```html
<lib-delete-modal></lib-delete-modal>
```

---

### 2. Use the service to open modal

Inject the service in your component:

```ts
import { Component } from '@angular/core';
import { DeleteModalService } from '@angay/delete-modal';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="openDelete()">Delete Item</button>
    <angay-delete-modal></angay-delete-modal>
  `
})
export class ExampleComponent {
  constructor(private deleteModalService: DeleteModalService) {}

  openDelete() {
    this.deleteModalService.open(() => {
      console.log('✅ Item deleted...');
      // Call your delete API here
    });
  }
}
```

---

### 3. Customize inputs

The modal comes with default values but you can override them:

```html
<angay-delete-modal
  heading="Confirm Deletion"
  message="Do you really want to remove this user?"
  confirmButtonText="Yes, Remove"
  cancelButtonText="No, Keep">
</angay-delete-modal>
```

---

## 🎨 Styling

The modal ships with minimal **SCSS styles** (backdrop, box, buttons, animations).
You can override them globally in your project if you need custom design.

---

## 📄 API

| Input               | Type   | Default           | Description                |
| ------------------- | ------ | ----------------- | -------------------------- |
| `heading`           | string | `"Delete?"`       | Title text of the modal.   |
| `message`           | string | `"Are you sure?"` | Message body of the modal. |
| `confirmButtonText` | string | `"Yes, Delete"`   | Label for confirm button.  |
| `cancelButtonText`  | string | `"Cancel"`        | Label for cancel button.   |

---

## ⚡ Features

* ✅ Standalone Angular component
* ✅ Service-based control (open/close)
* ✅ Promise-like callback for delete action
* ✅ Customizable heading, message & button labels
* ✅ Lightweight & animation-ready

---

## 📦 Build & Publish

If you’re contributing, build and publish to npm:

```bash
ng build @angay/delete-modal
npm publish dist/angay/delete-modal
```

---

## 📝 License

MIT © [Angayarkanni Balasubramanian](https://github.com/angay)

---
