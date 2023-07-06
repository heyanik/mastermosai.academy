---
sidebar_position: 1
---

# Python

# Learn Python Step by Step for Beginners

Welcome to the beginner's guide to learning Python! This documentation will take you through the fundamental concepts of Python programming and provide step-by-step instructions to help you get started. By the end, you'll have a solid foundation in Python and be ready to build your own projects.

## Table of Contents

1. [Introduction](#introduction)
2. [Setting Up Python](#setting-up-python)
3. [Python Basics](#python-basics)
   - [Variables and Data Types](#variables-and-data-types)
   - [Operators](#operators)
   - [Control Flow](#control-flow)
   - [Functions](#functions)
4. [Python Data Structures](#python-data-structures)
   - [Lists](#lists)
   - [Tuples](#tuples)
   - [Dictionaries](#dictionaries)
   - [Sets](#sets)
5. [Working with Files](#working-with-files)
6. [Modules and Packages](#modules-and-packages)
7. [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
8. [Error Handling](#error-handling)
9. [Python Libraries and Frameworks](#python-libraries-and-frameworks)
10. [Next Steps](#next-steps)

## Introduction

Python is a versatile and beginner-friendly programming language. Its simplicity and readability make it a great choice for beginners. Python has a vast ecosystem of libraries and frameworks, making it suitable for a wide range of applications, from web development to data analysis and artificial intelligence.

## Setting Up Python

To set up Python, follow these steps:

1. Visit the official Python website at [python.org](https://www.python.org) and navigate to the downloads section.
2. Choose the appropriate installer for your operating system (Windows, macOS, or Linux) and download it.
3. Run the installer and follow the on-screen instructions to install Python.
4. After installation, open a terminal or command prompt and type `python --version` to verify the installation. You should see the Python version number displayed.

## Python Basics

Let's start coding! In this section, we'll cover the basics of Python programming, including variables, data types, operators, control flow, and functions. Each topic will be explained with examples and exercises to reinforce your understanding.

### Variables and Data Types

# Variables

```python
name = "John"
age = 25
is_new = True
```

# Data Types

```python
message = "Hello, World!"
count = 10
rating = 4.5
is_valid = False
```

# Arithmetic Operators

```python
result = 10 + 5
result = 10 - 5
result = 10 * 5
result = 10 / 5
result = 10 % 3
result = 10 ** 3
```

# Comparison Operators

```python
is_equal = 10 == 5
is_not_equal = 10 != 5
is_greater = 10 > 5
is_less = 10 < 5
is_greater_equal = 10 >= 5
is_less_equal = 10 <= 5
```

# Logical Operators

```python
is_true = True and False
is_true = True or False
is_false = not True
```

# If-Else Statement

```python
age = 18
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

# For Loop

```python
numbers = [1, 2, 3, 4,Continuing from the previous markdown file:
```

# Python Data Structures

Python provides powerful data structures that can be used to store and manipulate collections of data. In this section, we'll cover lists, tuples, dictionaries, and sets.

## Lists

# List Creation

```python
numbers = [1, 2, 3, 4, 5]
```

# Accessing List Elements

```python
print(numbers[0])  # Output: 1
print(numbers[2])  # Output: 3
```

# Modifying List Elements

```python
numbers[1] = 10
print(numbers)  # Output: [1, 10, 3, 4, 5]
```

# List Operations

```python
numbers.append(6)
numbers.remove(3)
print(len(numbers))  # Output: 5
```

# Tuple Creation

```python
person = ("John", 25, "USA")
```

# Accessing Tuple Elements

```python
print(person[0])  # Output: John
print(person[1])  # Output: 25
```

# Tuple Unpacking

```python
name, age, country = person
print(name, age, country)  # Output: John 25 USA
```

# Dictionary Creation

```python
person = {"name": "John", "age": 25, "country": "USA"}
```

# Accessing Dictionary Elements

```python
print(person["name"])  # Output: John
print(person["age"])  # Output: 25
```

# Modifying Dictionary Elements

```python
person["age"] = 30
print(person)  # Output: {'name': 'John', 'age': 30, 'country': 'USA'}
```

# Dictionary Operations

```python
person["city"] = "New York"
del person["country"]
print(len(person))  # Output: 3
```

# Set Creation

```python
fruits = {"apple", "banana", "orange"}
```

# Adding and Removing Elements

```python
fruits.add("mango")
fruits.remove("banana")
```

# Set Operations

```python
vegetables = {"carrot", "potato", "tomato"}
all_food = fruits.union(vegetables)
common_food = fruits.intersection(vegetables)
print(all_food)  # Output: {'carrot', 'tomato', 'apple', 'mango', 'potato', 'orange'}
print(common_food)  # Output: set()
```
