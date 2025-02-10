---
title: Persistent Storage 101
excerpt: Notes on what I have learned about Persistent Storage
publishDate: 'Feb 10 2025'
tags:
  - persistent storage
isFeatured: true
seo:
  image:
    src: '/post-1.jpg'
    alt: Rocketship taking off for deployment
---

![Rocketship taking off for deployment](/post-1.jpg)

## Two main broad types of databases
- online database
- offline database

### Online Databases
Online databases are used for real time backend querying, some examples include postgresql, mysql, mariadb. These databases allow for concurrent access and real time access.

### Offline Databases
Offline databases are used primarily for storing and processing data in bulk. This allows for batch processing, scheduled updates, data analysis and reporting.

## Types of online databases

### Relational Databases
- Uses schemas and typed columns/fields, this keeps data strict and structured
- Can require more query joins to piece data together
- Uses tables, tables have rows and columns. Each table is an entity that can have relationships with other entities/tables.
- Primary key, Unique key, Foreign key are some constraints included that keep data consistency
- The strictness and rules/constraints in relational databases allows for data consistency
- Follows Transactional ACID principles, atomicity, consistency, isolation, durablitiy
- Examples: postgresql, mysql, sqlserver, mariadb

### Non Relational Databases
- Are schema less, allows for more flexible data structure, easier to add fields as data needs change
- Can require less query joins due to more flexibility in fields and data structure
- Scale better than relational databases due to better flexibility and less constraints/rules
- Can have data inconsistencies due to less strictness, more flexibile
- Relationships between data are typically not supported
- Examples: redis, mongodb, cassandra


