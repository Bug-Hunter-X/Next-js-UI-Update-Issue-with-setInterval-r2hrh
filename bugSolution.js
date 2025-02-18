```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js App</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
function MyComponent() {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      countRef.current = countRef.current + 1;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>Count: {countRef.current}</div>
  );
}
```