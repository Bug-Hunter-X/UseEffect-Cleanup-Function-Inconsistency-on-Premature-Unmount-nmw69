# React useEffect Cleanup Function Inconsistency

This repository demonstrates an uncommon bug related to the cleanup function in React's `useEffect` hook. The issue arises when a component using `useEffect` is unmounted prematurely due to a parent component re-render, causing the cleanup function to not always execute as expected.

## Bug Description
The provided `bug.js` file contains a simple component that uses `useEffect` to log messages upon mounting and unmounting.  However, if the parent component re-renders quickly, before the component has finished rendering the cleanup function might not be called causing inconsistency.

## Solution
The `bugSolution.js` demonstrates a potential solution using `useRef` to detect premature unmount. A boolean variable tracks the component's active status which can be used to improve the logic in the cleanup function.