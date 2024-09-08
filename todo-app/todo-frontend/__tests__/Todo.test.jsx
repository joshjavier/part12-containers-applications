import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import TodoList from "../src/Todos/List";

test('A single todo', () => {
  const deleteTodo = vi.fn()
  const completeTodo = vi.fn()
  const todos = [
    {
      id: '1',
      text: 'Sample todo',
      done: false,
    }
  ]

  render(<TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
  expect(screen.getByText('Sample todo'))
})
