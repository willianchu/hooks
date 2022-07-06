# Getting Started

## Quick Start
      npx create-react-app my-app
      cd my-app
      npm start

# hooks
1. useState

> const [var, setVar] = useState(defaultValue); // defaultValue once rednered at the first time.
> setVar(prevVar => prevVar - 1); // to get updated value.
> return { ...prevState, count: prevState.count - 1 } // have to spread to avoid overwrite blank values diferent from count.
> // updates old value as well in spread - the correct way is create a different useState to a different objects.
    
2. useEffect - Most Important Hook

> return removeEventListener // cleanup listener avoiding to be stacked so many time as page renders.
>
> useEffect(() => {  },  [] ); // runs on mount only.
  
3. useContext

> In fuctions import {ThemeContext } and {usecontext. inside the function useContext(source) to pass the props from a context.provider
> In Classes import {ThemeContext } and wrap inside context.Consumer<>
> 
> 
  

## Good to know
4. useRef
5. useMemo
6. useCallback
7. useReducer
8. useTransition
9. useDeferredValue

## Optional
10. useLayoutEffect
11. useDebugValue
12. useImperativeHandle
13. useId

## Custom Hooks
14. Creating Custom Hooks
15. 1-5
16. 6-10
17. 11-15
18. 16-20
19. 21-25
20. 26-30

## react hooks
