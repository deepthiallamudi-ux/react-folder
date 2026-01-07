import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase.config';

/**
 * Service for handling todo CRUD operations
 * All Firestore interactions are abstracted here
 */

const TODOS_COLLECTION = 'todos';

export const todoService = {
  /**
   * Create a new todo
   * @param {string} userId - User ID
   * @param {string} title - Todo title
   * @returns {Promise<object>} Created todo object
   */
  createTodo: async (userId, title) => {
    try {
      const todoData = {
        userId,
        title,
        completed: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, TODOS_COLLECTION), todoData);

      return {
        success: true,
        todo: {
          id: docRef.id,
          ...todoData,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  /**
   * Get all todos for a user
   * @param {string} userId - User ID
   * @returns {Promise<Array>} Array of todos
   */
  getTodos: async (userId) => {
    try {
      const q = query(
        collection(db, TODOS_COLLECTION),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const todos = [];

      querySnapshot.forEach((doc) => {
        todos.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      return {
        success: true,
        todos,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        todos: [],
      };
    }
  },

  /**
   * Update a todo
   * @param {string} todoId - Todo ID
   * @param {object} updates - Object containing fields to update
   * @returns {Promise<object>} Update result
   */
  updateTodo: async (todoId, updates) => {
    try {
      const todoRef = doc(db, TODOS_COLLECTION, todoId);
      await updateDoc(todoRef, {
        ...updates,
        updatedAt: serverTimestamp(),
      });

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  /**
   * Toggle todo completion status
   * @param {string} todoId - Todo ID
   * @param {boolean} completed - New completion status
   * @returns {Promise<object>} Update result
   */
  toggleTodo: async (todoId, completed) => {
    return todoService.updateTodo(todoId, { completed });
  },

  /**
   * Delete a todo
   * @param {string} todoId - Todo ID
   * @returns {Promise<object>} Delete result
   */
  deleteTodo: async (todoId) => {
    try {
      const todoRef = doc(db, TODOS_COLLECTION, todoId);
      await deleteDoc(todoRef);

      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
      };
    }
  },

  /**
   * Get filtered todos
   * @param {string} userId - User ID
   * @param {string} filter - Filter type ('all', 'completed', 'pending')
   * @returns {Promise<Array>} Filtered array of todos
   */
  getFilteredTodos: async (userId, filter = 'all') => {
    const result = await todoService.getTodos(userId);

    if (!result.success) {
      return result;
    }

    let filteredTodos = result.todos;

    if (filter === 'completed') {
      filteredTodos = result.todos.filter((todo) => todo.completed);
    } else if (filter === 'pending') {
      filteredTodos = result.todos.filter((todo) => !todo.completed);
    }

    return {
      success: true,
      todos: filteredTodos,
    };
  },
};
