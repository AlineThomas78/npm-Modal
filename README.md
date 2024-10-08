# react-aline-modal

### `Installing the react-aline-modal Library`
To install and use the react-aline-modal component in your project, follow these steps:

### `Installation`
Run the following command to install the modal component:

``npm install react-aline-modal ``

### `Usage`

Once installed, you can import and use the modal in your React components.

Example:

 ``` import React, { useState } from "react";
import Modal from "react-aline-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Ouvrir la modal</button>
      <Modal open={isOpen} title = "title" textContent = 'your text content' onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
```


## Props

- **`open`**: `boolean` - Controls whether the modal is visible (`true`) or hidden (`false`).
- **`onClose`**: `function` - Function to close the modal.
- **`title`**: `string` - Title displayed in the modal header.
- **`textContent`**: `string` - Main content displayed in the modal body.

## Prérequis

Before installing this library, please ensure that you have the following prerequisites:

- [Node.js](https://nodejs.org/en/download/) version 14 or higher.
- [npm](https://www.npmjs.com/get-npm) version 6 or higher.


If you are using React, you will also need:
- React >= 17.x





