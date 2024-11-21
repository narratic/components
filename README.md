## Shadcn Card Component

A beautiful, reusable card component built with shadcn/ui.

### Installation

```bash
npm install shadcn-card-component
```

### Usage

```jsx
import { SimpleCard } from 'shadcn-card-component';
// Import styles (IMPORTANT!)
import 'shadcn-card-component/dist/style.css';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <SimpleCard
      title="Hello"
      content="World"
      buttonText="Click me"
      onButtonClick={handleClick}
    />
  );
}
```

### Props

- `title`: string - The card's title
- `content`: string - The card's content
- `buttonText`: string - The text to display on the button
- `onButtonClick`: () => void - Callback function for button click events# components
