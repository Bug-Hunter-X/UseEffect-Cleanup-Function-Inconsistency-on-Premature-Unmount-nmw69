```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const isActive = useRef(true);

  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    return () => {
      // Check if component is active before executing the cleanup function
      if (isActive.current) {
        console.log('Component unmounted');
      }
      isActive.current = false; // Set isActive to false when unmounting
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```