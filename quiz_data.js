/**
 * Generated offline fallback. Do not edit directly.
 * Edit quiz-manifest.json and files in quizzes/, then run:
 * pwsh -File .\scripts\build-offline-fallback.ps1
 */
window.DEFAULT_QUIZ_DATA = {
  "quizId": "seg1201-quiz-01",
  "title": "Revision Quiz",
  "course": "Database Systems",
  "description": "Choose one answer. Your first choice is scored immediately with instant red/green visual feedback, the correct answer revealed, and an in-depth rationale.",
  "sections": [
    {
      "id": "sec-1",
      "code": "1",
      "title": "1. Relational database model",
      "description": "Week 2: Data modelling, business rules, redundancy, relational databases, keys, NULL and relational set operators.",
      "items": [
        {
          "id": "q1",
          "question": "Before creating tables for a new database, why would the designer draw a data model?",
          "options": [
            {
              "key": "A",
              "text": "To replace the data itself"
            },
            {
              "key": "B",
              "text": "To provide a blueprint for the database"
            },
            {
              "key": "C",
              "text": "To enter records"
            },
            {
              "key": "D",
              "text": "To remove all relationships"
            }
          ],
          "answer": "B",
          "explanation": "The model communicates the design before implementation, like an architect’s blueprint.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Data modelling, p. 5",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 5
            }
          ]
        },
        {
          "id": "q2",
          "question": "Which option is an attribute of Library Book in the table?",
          "options": [
            {
              "key": "A",
              "text": "Library book"
            },
            {
              "key": "B",
              "text": "Customer"
            },
            {
              "key": "C",
              "text": "ISBN number"
            },
            {
              "key": "D",
              "text": "Loan"
            }
          ],
          "answer": "C",
          "explanation": "A library book is an entity; its ISBN describes it, just as its author and category do.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Entities and attributes, p. 7",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 7
            }
          ],
          "context": {
            "type": "table",
            "title": "Library Book — illustrative rows using the slide’s attributes",
            "columns": [
              "ISBN number",
              "Author",
              "Category"
            ],
            "rows": [
              [
                "9780133970777",
                "Elmasri and Navathe",
                "Databases"
              ],
              [
                "9780132350884",
                "Robert C. Martin",
                "Programming"
              ]
            ]
          }
        },
        {
          "id": "q3",
          "question": "Using the business rules in the table, which option correctly classifies relationships 1, 2 and 3, in that order? Read each pair from the first entity to the second.",
          "options": [
            {
              "key": "A",
              "text": "One-to-many; one-to-one; many-to-many"
            },
            {
              "key": "B",
              "text": "One-to-one; one-to-many; many-to-many"
            },
            {
              "key": "C",
              "text": "One-to-one; many-to-many; one-to-many"
            },
            {
              "key": "D",
              "text": "Many-to-many; one-to-many; one-to-one"
            }
          ],
          "answer": "B",
          "explanation": "1. School–Headteacher is one-to-one: each school has one headteacher, and each headteacher leads one school. 2. School–Teacher is one-to-many: a school can have several teachers, but each teacher works at one school in this example. 3. Pupil–Lesson is many-to-many: a pupil can attend several lessons, and a lesson can have several pupils. A junction table records one pupil–lesson pairing per row.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Data Model Basic Building Blocks — Relationships, p. 8",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 8
            }
          ],
          "context": {
            "type": "table",
            "title": "Relationship examples from the Week 2 slide",
            "columns": [
              "Pair",
              "Entities",
              "Business rule"
            ],
            "rows": [
              [
                "1",
                "School → Headteacher",
                "Each school has one headteacher, and each headteacher leads one school."
              ],
              [
                "2",
                "School → Teacher",
                "A school can have many teachers, and each teacher works at one school."
              ],
              [
                "3",
                "Pupil → Lesson",
                "A pupil can attend many lessons, and a lesson can have many pupils."
              ]
            ]
          }
        },
        {
          "id": "q4",
          "question": "A business is defining rules for its customer invoices. Which proposed rule protects data integrity rather than changing how invoices are displayed?",
          "options": [
            {
              "key": "A",
              "text": "List invoices alphabetically"
            },
            {
              "key": "B",
              "text": "Show invoices in a larger font"
            },
            {
              "key": "C",
              "text": "Display the newest invoice first"
            },
            {
              "key": "D",
              "text": "Give each customer invoice a unique identifying number"
            }
          ],
          "answer": "D",
          "explanation": "The uniqueness constraint prevents two invoices from receiving the same identifying number.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Constraints, p. 9",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 9
            }
          ]
        },
        {
          "id": "q5",
          "question": "A customer has not made any bookings today. Using the rules in the table, which proposed booking can the travel agency accept?",
          "options": [
            {
              "key": "A",
              "text": "One booking with one agent, one travel package and one payment transaction"
            },
            {
              "key": "B",
              "text": "One booking with two agents, one travel package and one payment transaction"
            },
            {
              "key": "C",
              "text": "One booking with one agent, two travel packages and one payment transaction"
            },
            {
              "key": "D",
              "text": "One booking with one agent, one travel package and two payment transactions"
            }
          ],
          "answer": "A",
          "explanation": "A satisfies all four rules shown. The customer has not booked today, so this would be their first booking of the day. The booking has only one agent, one package and one payment transaction. B breaks the agent rule, C breaks the package rule, and D breaks the payment rule. The daily limit applies to the number of bookings per customer, not to the number of packages or payments in a booking.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Travel agency case scenario — Business rules, p. 11",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 11
            }
          ],
          "context": {
            "type": "table",
            "title": "Travel agency — rules for this question",
            "columns": [
              "What is checked",
              "Business rule"
            ],
            "rows": [
              [
                "Bookings per customer",
                "A customer can make at most one booking per day."
              ],
              [
                "Agent handling a booking",
                "A booking can be handled by only one agent."
              ],
              [
                "Package in a booking",
                "Each booking must have exactly one package."
              ],
              [
                "Payment for a booking",
                "Each booking must have exactly one associated payment transaction."
              ]
            ]
          }
        },
        {
          "id": "q6",
          "question": "A designer wants to show the main entities and their broad relationships without deciding how the database will store them. Which model is appropriate?",
          "options": [
            {
              "key": "A",
              "text": "Physical data model"
            },
            {
              "key": "B",
              "text": "Conceptual data model"
            },
            {
              "key": "C",
              "text": "Logical data model"
            },
            {
              "key": "D",
              "text": "Database records"
            }
          ],
          "answer": "B",
          "explanation": "A conceptual model shows the entities and broad relationships without the detailed database structure.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Conceptual data model, p. 17",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 17
            }
          ]
        },
        {
          "id": "q38",
          "question": "Which model identifies key and non-key attributes without specifying a particular DBMS implementation?",
          "options": [
            {
              "key": "A",
              "text": "Conceptual data model"
            },
            {
              "key": "B",
              "text": "Physical data model"
            },
            {
              "key": "C",
              "text": "Logical data model"
            },
            {
              "key": "D",
              "text": "Database records"
            }
          ],
          "answer": "C",
          "explanation": "A logical model adds attribute and key detail but does not depend on how a particular DBMS implements it.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Logical data model, p. 18",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 18
            }
          ]
        },
        {
          "id": "q39",
          "question": "In a physical data model, how are entity attributes represented?",
          "options": [
            {
              "key": "A",
              "text": "As relationships only"
            },
            {
              "key": "B",
              "text": "As complete rows"
            },
            {
              "key": "C",
              "text": "As separate databases"
            },
            {
              "key": "D",
              "text": "As table columns"
            }
          ],
          "answer": "D",
          "explanation": "The slide maps entities to tables and their attributes to columns.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Physical data model, p. 19",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 19
            }
          ]
        },
        {
          "id": "q40",
          "question": "What is data redundancy in the lecture?",
          "options": [
            {
              "key": "A",
              "text": "The same data appearing in multiple records or places"
            },
            {
              "key": "B",
              "text": "Data that has not yet been entered"
            },
            {
              "key": "C",
              "text": "A link between two tables"
            },
            {
              "key": "D",
              "text": "A distinct identifier for each record"
            }
          ],
          "answer": "A",
          "explanation": "Repeated copies of the same fact are redundant. If one copy changes and another does not, the records can disagree.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Data redundancy, p. 20",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 20
            }
          ]
        },
        {
          "id": "q41",
          "question": "How does the lecture distinguish a relational database from a flat-file database?",
          "options": [
            {
              "key": "A",
              "text": "It stores everything in one unlinked table."
            },
            {
              "key": "B",
              "text": "It groups data into entities stored in multiple linked tables."
            },
            {
              "key": "C",
              "text": "It stores only numerical data."
            },
            {
              "key": "D",
              "text": "It cannot store related entities."
            }
          ],
          "answer": "B",
          "explanation": "A relational database represents entities in separate tables and links those tables instead of keeping everything in one flat file.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Relational databases, p. 22",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 22
            }
          ]
        },
        {
          "id": "q42",
          "question": "What is the role of a primary key?",
          "options": [
            {
              "key": "A",
              "text": "To set the display order"
            },
            {
              "key": "B",
              "text": "To repeat a value in every row"
            },
            {
              "key": "C",
              "text": "To uniquely identify a record"
            },
            {
              "key": "D",
              "text": "To mark a missing value"
            }
          ],
          "answer": "C",
          "explanation": "A primary key identifies one record. Two records cannot share the same primary-key value.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Keys, p. 24",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 24
            }
          ]
        },
        {
          "id": "q37",
          "question": "What can you conclude from the NULL in John’s Phone No. column?",
          "context": {
            "type": "table",
            "title": "Reference table for NULL values",
            "columns": [
              "Name",
              "Place",
              "Phone No."
            ],
            "rows": [
              [
                "Tom",
                "USA",
                "20394568"
              ],
              [
                "John",
                "UAE",
                "NULL"
              ],
              [
                "Andy",
                "NULL",
                "65482313"
              ]
            ]
          },
          "options": [
            {
              "key": "A",
              "text": "John’s phone number is zero."
            },
            {
              "key": "B",
              "text": "John has a phone number but chose not to share it."
            },
            {
              "key": "C",
              "text": "John does not have a phone number."
            },
            {
              "key": "D",
              "text": "No phone number is recorded for John, and the table does not tell us why."
            }
          ],
          "answer": "D",
          "explanation": "NULL represents a missing value, not zero. John’s number could be unknown, deliberately withheld, or not applicable. For example, a number not yet entered and a number withheld for privacy can both appear as NULL.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Importance of NULL Value, p. 27",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 27
            }
          ]
        },
        {
          "id": "q44",
          "question": "In the relational model, what do relational set operators manipulate?",
          "options": [
            {
              "key": "A",
              "text": "Database passwords"
            },
            {
              "key": "B",
              "text": "File names"
            },
            {
              "key": "C",
              "text": "Display settings"
            },
            {
              "key": "D",
              "text": "Relations"
            }
          ],
          "answer": "D",
          "explanation": "The lecture’s review question identifies relations as what relational set operators manipulate.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Relational set operators, p. 37",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 37
            }
          ]
        }
      ],
      "references": [
        {
          "label": "Week 2 lecture",
          "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf"
        }
      ]
    },
    {
      "id": "sec-2",
      "code": "2",
      "title": "2. Entity relationship modelling and keys",
      "description": "Attribute classifications (derived, composite, multivalued), primary and foreign keys, candidate keys, cardinality, and referential integrity.",
      "items": [
        {
          "id": "q9",
          "question": "Which term describes a unique identifier that was not chosen as the primary key?",
          "options": [
            {
              "key": "A",
              "text": "Composite key"
            },
            {
              "key": "B",
              "text": "Foreign key"
            },
            {
              "key": "C",
              "text": "Primary key"
            },
            {
              "key": "D",
              "text": "Alternate key"
            }
          ],
          "answer": "D",
          "explanation": "An alternate key uniquely identifies a record but is not the chosen primary key. It can still be used to look up the record.",
          "references": [
            {
              "label": "Week 3 ER modelling, p. 6",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 6
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q7",
          "question": "An Address is broken into street name, postcode and city. What type of attribute is Address?",
          "options": [
            {
              "key": "A",
              "text": "Simple"
            },
            {
              "key": "B",
              "text": "Derived"
            },
            {
              "key": "C",
              "text": "Composite"
            },
            {
              "key": "D",
              "text": "Multivalued"
            }
          ],
          "answer": "C",
          "explanation": "The slide uses Address as a composite attribute because it breaks down into components such as street name, postcode and city.",
          "references": [
            {
              "label": "Week 3 ER modelling, p. 9",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 9
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q8",
          "question": "An employee’s pay is calculated from hours worked and wage information. What type of attribute is pay?",
          "options": [
            {
              "key": "A",
              "text": "Derived"
            },
            {
              "key": "B",
              "text": "Composite identifier"
            },
            {
              "key": "C",
              "text": "Multivalued"
            },
            {
              "key": "D",
              "text": "Foreign key"
            }
          ],
          "answer": "A",
          "explanation": "Pay is calculated from other attributes, such as hours worked and wage. That makes it derived.",
          "references": [
            {
              "label": "Week 3 ER modelling, p. 9",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 9
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q10",
          "question": "A bookstore user may have no orders or place several orders; every order has exactly one user. What are the allowed counts for orders per user and users per order, respectively?",
          "options": [
            {
              "key": "A",
              "text": "1; 0..many"
            },
            {
              "key": "B",
              "text": "0..many; 1"
            },
            {
              "key": "C",
              "text": "1..many; 0..1"
            },
            {
              "key": "D",
              "text": "0..1; 1..many"
            }
          ],
          "answer": "B",
          "explanation": "The bookstore allows a user to place zero, one or many orders, but each order must be placed by exactly one user.",
          "references": [
            {
              "label": "Week 3 bookstore practical, p. 3",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q15",
          "question": "What do the circle and crow’s foot at the ORDERS end mean?",
          "options": [
            {
              "key": "A",
              "text": "Many users per order"
            },
            {
              "key": "B",
              "text": "Zero or many orders per user"
            },
            {
              "key": "C",
              "text": "Exactly one order per user"
            },
            {
              "key": "D",
              "text": "An order can lack a user"
            }
          ],
          "answer": "B",
          "explanation": "Read the symbols at the Orders end from the User side: the circle allows zero and the crow’s foot allows many.",
          "references": [
            {
              "label": "Week 3 bookstore practical, p. 3",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Bookstore ERD excerpt (text notation)",
            "content": "USER ||────o{ ORDERS"
          }
        },
        {
          "id": "q13",
          "question": "Which two columns form the composite primary key in the bookstore example?",
          "options": [
            {
              "key": "A",
              "text": "Order_ID and Quantity"
            },
            {
              "key": "B",
              "text": "Book_ID and Price"
            },
            {
              "key": "C",
              "text": "Order_ID and Price"
            },
            {
              "key": "D",
              "text": "Order_ID and Book_ID"
            }
          ],
          "answer": "D",
          "explanation": "The bookstore rule requires the combination of Order_ID and Book_ID to be unique, not either column by itself.",
          "references": [
            {
              "label": "Week 3 bookstore practical, p. 4",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 4
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Bookstore order-item details",
            "content": "ORDER_ITEMS(Order_ID, Book_ID, Quantity, Price). Each row records one book on an order. A given book may appear at most once on a given order."
          }
        },
        {
          "id": "q11",
          "question": "The library has one record for a book title and two physical copies of that title. Which foreign key should be added so that each copy points to its book title?",
          "context": {
            "type": "table",
            "title": "Mini Library — book titles and physical copies",
            "columns": [
              "Table",
              "What one row represents",
              "Primary key",
              "Business rule"
            ],
            "rows": [
              [
                "BOOK_TITLE",
                "One book title",
                "BookID",
                "Each title has one or more physical copies."
              ],
              [
                "BOOK_COPY",
                "One physical copy that can be borrowed",
                "CopyID",
                "Each copy belongs to exactly one book title."
              ]
            ]
          },
          "options": [
            {
              "key": "A",
              "text": "BOOK_TITLE.CopyID references BOOK_COPY.CopyID"
            },
            {
              "key": "B",
              "text": "BOOK_COPY.BookID references BOOK_TITLE.BookID"
            },
            {
              "key": "C",
              "text": "LOAN.BookID references BOOK_TITLE.BookID"
            },
            {
              "key": "D",
              "text": "BOOK_COPY.CopyID references BOOK_TITLE.BookID"
            }
          ],
          "answer": "B",
          "explanation": "BOOK_TITLE is the one side and BOOK_COPY is the many side: one title can have several copies, but each copy belongs to exactly one title. So BOOK_COPY.BookID is the foreign key that references BOOK_TITLE.BookID. Each copy has its own CopyID as its primary key. For example, two copies of the same title have different CopyID values but share the same BookID.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 ERD practical: Mini Library, business rules BR3–BR5, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ]
        },
        {
          "id": "q12",
          "question": "In the Mini Café, an order can contain several menu items, and the same menu item can appear on different orders. The café records how many units of each item were ordered on each order. In which table should the Quantity attribute be stored?",
          "options": [
            {
              "key": "A",
              "text": "Order–item junction table"
            },
            {
              "key": "B",
              "text": "Menu item table"
            },
            {
              "key": "C",
              "text": "Order table"
            },
            {
              "key": "D",
              "text": "Menu category table"
            }
          ],
          "answer": "A",
          "explanation": "Quantity describes a particular menu item on a particular order, so it belongs in the Order–item junction table, which links orders to menu items. For example, one order may include two coffees and another may include one coffee. The menu item is the same, but the quantity differs by order. Storing Quantity in the Order table would not tell you how many units of each item were ordered.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 ERD practical: Mini Café Ordering System, p. 2",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 2
            }
          ]
        }
      ]
    },
    {
      "id": "sec-3",
      "code": "3",
      "title": "3. Database tables and normalization",
      "description": "Insertion, update and deletion anomalies; 1NF, 2NF and 3NF using the lecture’s player-inventory example.",
      "items": [
        {
          "id": "q16",
          "question": "Alex moves to Sunway but only his Physics row is updated. What anomaly does this create?",
          "options": [
            {
              "key": "A",
              "text": "Insertion anomaly"
            },
            {
              "key": "B",
              "text": "Deletion anomaly"
            },
            {
              "key": "C",
              "text": "Entity integrity violation"
            },
            {
              "key": "D",
              "text": "Update anomaly"
            }
          ],
          "answer": "D",
          "explanation": "Alex’s move from Lumut to Sunway must be recorded in all three rows. Updating just one leaves conflicting addresses.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Combined student–subject table — excerpt from the practical",
            "columns": [
              "SID",
              "SName",
              "SAddress",
              "SubjectOpted",
              "CreditValue"
            ],
            "rows": [
              [
                "401",
                "Adam",
                "Ipoh",
                "Computer",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Physics",
                "4"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Maths",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Biology",
                "4"
              ]
            ]
          }
        },
        {
          "id": "q17",
          "question": "The only way to record a new subject and its credit value in this design is to record a student enrolment. What anomaly is this?",
          "options": [
            {
              "key": "A",
              "text": "Insertion anomaly"
            },
            {
              "key": "B",
              "text": "Update anomaly"
            },
            {
              "key": "C",
              "text": "Deletion anomaly"
            },
            {
              "key": "D",
              "text": "Transitive dependency"
            }
          ],
          "answer": "A",
          "explanation": "The practical’s combined table has no independent place to record a new subject and its credits before anyone enrols.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Combined student–subject table — excerpt from the practical",
            "columns": [
              "SID",
              "SName",
              "SAddress",
              "SubjectOpted",
              "CreditValue"
            ],
            "rows": [
              [
                "401",
                "Adam",
                "Ipoh",
                "Computer",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Physics",
                "4"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Maths",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Biology",
                "4"
              ]
            ]
          }
        },
        {
          "id": "q18",
          "question": "Adam is the only student taking Computer. Deleting his enrolment also deletes the only record of its credit value. What anomaly is this?",
          "options": [
            {
              "key": "A",
              "text": "Insertion anomaly"
            },
            {
              "key": "B",
              "text": "Update anomaly"
            },
            {
              "key": "C",
              "text": "Deletion anomaly"
            },
            {
              "key": "D",
              "text": "Sorting problem"
            }
          ],
          "answer": "C",
          "explanation": "Adam’s row was the only record of the Computer subject’s credit value. Deleting the enrolment deletes that fact too.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Combined student–subject table — excerpt from the practical",
            "columns": [
              "SID",
              "SName",
              "SAddress",
              "SubjectOpted",
              "CreditValue"
            ],
            "rows": [
              [
                "401",
                "Adam",
                "Ipoh",
                "Computer",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Physics",
                "4"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Maths",
                "3"
              ],
              [
                "402",
                "Alex",
                "Lumut",
                "Biology",
                "4"
              ]
            ]
          }
        },
        {
          "id": "q19",
          "question": "How does the lecture represent these inventory items in 1NF?",
          "options": [
            {
              "key": "A",
              "text": "Store an item list in one cell"
            },
            {
              "key": "B",
              "text": "Use a separate row for each player–item pair"
            },
            {
              "key": "C",
              "text": "Add a numbered column for every item"
            },
            {
              "key": "D",
              "text": "Sort the values inside each cell"
            }
          ],
          "answer": "B",
          "explanation": "The slide puts Adam91’s arrows and rings in separate rows, with a single item and quantity in each row.",
          "references": [
            {
              "label": "Week 5 normalization, p. 17",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 17
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Before 1NF — repeating inventory items",
            "content": "Adam91 has 2 arrows and 4 rings. Suppose both item–quantity pairs are listed together in one player record."
          }
        },
        {
          "id": "q20",
          "question": "In the player inventory example, which attribute alone determines Player_rating?",
          "options": [
            {
              "key": "A",
              "text": "Item"
            },
            {
              "key": "B",
              "text": "Quantity"
            },
            {
              "key": "C",
              "text": "Player_rating and Item"
            },
            {
              "key": "D",
              "text": "Player_Id"
            }
          ],
          "answer": "D",
          "explanation": "Player_rating is determined by Player_Id alone, which is only one part of the composite key.",
          "references": [
            {
              "label": "Week 5 normalization, p. 24",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 24
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player inventory excerpt — PK (Player_Id, Item)",
            "columns": [
              "Player_Id",
              "Item",
              "Quantity",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "arrow",
                "2",
                "Intermediate"
              ],
              [
                "Adam91",
                "ring",
                "4",
                "Intermediate"
              ],
              [
                "Famini_hensem",
                "arrow",
                "5",
                "Advanced"
              ]
            ]
          }
        },
        {
          "id": "q21",
          "question": "Each row records a quantity for one player and one item. Which dependency uses the entire primary key to determine Quantity?",
          "options": [
            {
              "key": "A",
              "text": "Player_Id → Quantity"
            },
            {
              "key": "B",
              "text": "Item → Quantity"
            },
            {
              "key": "C",
              "text": " (Player_Id, Item) → Quantity"
            },
            {
              "key": "D",
              "text": "Player_rating → Quantity"
            }
          ],
          "answer": "C",
          "explanation": "Quantity depends on both the player and item: Adam91 has 2 arrows but 4 rings, and another player may have a different quantity of arrows.",
          "references": [
            {
              "label": "Week 5 normalization, p. 24",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 24
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player inventory excerpt — PK (Player_Id, Item)",
            "columns": [
              "Player_Id",
              "Item",
              "Quantity",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "arrow",
                "2",
                "Intermediate"
              ],
              [
                "Adam91",
                "ring",
                "4",
                "Intermediate"
              ],
              [
                "Famini_hensem",
                "arrow",
                "5",
                "Advanced"
              ]
            ]
          }
        },
        {
          "id": "q22",
          "question": "The inventory table has single values in its cells and primary key (Player_Id, Item). Player_rating depends only on Player_Id. What is its highest normal form?",
          "options": [
            {
              "key": "A",
              "text": "1NF"
            },
            {
              "key": "B",
              "text": "2NF"
            },
            {
              "key": "C",
              "text": "3NF"
            },
            {
              "key": "D",
              "text": "0NF"
            }
          ],
          "answer": "A",
          "explanation": "The table has separate, single-valued cells, but Player_rating depends on only part of the key. This prevents 2NF.",
          "references": [
            {
              "label": "Week 5 normalization, p. 24",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 24
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player inventory excerpt — PK (Player_Id, Item)",
            "columns": [
              "Player_Id",
              "Item",
              "Quantity",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "arrow",
                "2",
                "Intermediate"
              ],
              [
                "Adam91",
                "ring",
                "4",
                "Intermediate"
              ],
              [
                "Famini_hensem",
                "arrow",
                "5",
                "Advanced"
              ]
            ]
          }
        },
        {
          "id": "q23",
          "question": "Player_rating depends only on Player_Id, but Quantity depends on the entire key. Which design removes the partial dependency without losing either fact?",
          "options": [
            {
              "key": "A",
              "text": "Player(Player_Id, Quantity) and Inventory(Item, Player_rating)"
            },
            {
              "key": "B",
              "text": "Player(Player_Id, Player_rating) and Inventory(Player_Id, Item, Quantity)"
            },
            {
              "key": "C",
              "text": "Player(Player_Id, Item, Player_rating) only"
            },
            {
              "key": "D",
              "text": "Inventory(Player_Id, Item, Quantity) only"
            }
          ],
          "answer": "B",
          "explanation": "Player_rating moves to the Player table because it depends only on Player_Id. Quantity stays with the player–item pair.",
          "references": [
            {
              "label": "Week 5 normalization, p. 25",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 25
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player inventory excerpt — PK (Player_Id, Item)",
            "columns": [
              "Player_Id",
              "Item",
              "Quantity",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "arrow",
                "2",
                "Intermediate"
              ],
              [
                "Adam91",
                "ring",
                "4",
                "Intermediate"
              ],
              [
                "Famini_hensem",
                "arrow",
                "5",
                "Advanced"
              ]
            ]
          }
        },
        {
          "id": "q24",
          "question": "Player_Id determines Player_Skill_level, which determines Player_rating. What kind of dependency links Player_Id to Player_rating through Player_Skill_level?",
          "options": [
            {
              "key": "A",
              "text": "Full dependency on a composite key"
            },
            {
              "key": "B",
              "text": "Repeating group"
            },
            {
              "key": "C",
              "text": "Partial dependency"
            },
            {
              "key": "D",
              "text": "Transitive dependency"
            }
          ],
          "answer": "D",
          "explanation": "Player_Id determines the numeric skill level, and that level determines the rating label. The rating therefore depends on Player_Id indirectly. Beginner can correspond to more than one numeric skill level; the reverse dependency is not assumed.",
          "references": [
            {
              "label": "Week 5 normalization, p. 29",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 29
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player example — numeric skill levels and rating labels",
            "columns": [
              "Player_Id",
              "Player_Skill_level",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "4",
                "Intermediate"
              ],
              [
                "Jinny1921",
                "3",
                "Beginner"
              ],
              [
                "Famini_hensem",
                "8",
                "Advanced"
              ],
              [
                "mai11",
                "1",
                "Beginner"
              ]
            ]
          }
        },
        {
          "id": "q25",
          "question": "Each player has one skill level, and each skill level determines the rating. Which design removes that transitive dependency while retaining the link?",
          "options": [
            {
              "key": "A",
              "text": "Player(Player_Id, Player_Skill_level) and Skill_Level(Player_Skill_level, Player_rating)"
            },
            {
              "key": "B",
              "text": "Player(Player_Id, Player_rating) only"
            },
            {
              "key": "C",
              "text": "Player(Player_Id) and Skill_Level(Player_Skill_level, Player_rating) with no link"
            },
            {
              "key": "D",
              "text": "Keep all three attributes together in Player"
            }
          ],
          "answer": "A",
          "explanation": "The player keeps their skill level. The rating is stored with that skill level in a separate table.",
          "references": [
            {
              "label": "Week 5 normalization, p. 30",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 30
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Player example — numeric skill levels and rating labels",
            "columns": [
              "Player_Id",
              "Player_Skill_level",
              "Player_rating"
            ],
            "rows": [
              [
                "Adam91",
                "4",
                "Intermediate"
              ],
              [
                "Jinny1921",
                "3",
                "Beginner"
              ],
              [
                "Famini_hensem",
                "8",
                "Advanced"
              ],
              [
                "mai11",
                "1",
                "Beginner"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "label": "Anomalies practical, p. 2",
          "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
          "page": 2
        },
        {
          "label": "Week 5 normalization, p. 17",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
          "page": 17
        },
        {
          "label": "Week 5 normalization, p. 24",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
          "page": 24
        },
        {
          "label": "Week 5 normalization, p. 25",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
          "page": 25
        },
        {
          "label": "Week 5 normalization, p. 29",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
          "page": 29
        },
        {
          "label": "Week 5 normalization, p. 30",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
          "page": 30
        }
      ]
    },
    {
      "id": "sec-4",
      "code": "4",
      "title": "4. Oracle SQL filtering, joins and keys",
      "description": "Oracle SQL joins and row filtering in the order shown in the Week 7 lecture.",
      "items": [
        {
          "id": "q29",
          "question": "Which ON condition matches each student to the sport with the same sportNO, using se for student_enroll and sp for sport?",
          "options": [
            {
              "key": "A",
              "text": "se.sportNO = sp.sportNO"
            },
            {
              "key": "B",
              "text": "se.SID = sp.sportNO"
            },
            {
              "key": "C",
              "text": "se.sportNO = se.sportNO"
            },
            {
              "key": "D",
              "text": "se.SID = se.SID"
            }
          ],
          "answer": "A",
          "explanation": "The slide matches the sport number in the student table to the sport number in SPORT.",
          "references": [
            {
              "label": "Week 7 SQL, p. 9",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 9
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Join inputs",
            "content": "student_enroll se (SID, SNAME, sportNO); sport sp (sportNO, sportNAME). Students are assigned sports by sport number."
          }
        },
        {
          "id": "q30",
          "question": "How many rows does an INNER JOIN on student_enroll.sportNO = sport.sportNO return, without any additional filters?",
          "options": [
            {
              "key": "A",
              "text": "6"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "8"
            },
            {
              "key": "D",
              "text": "13"
            }
          ],
          "answer": "C",
          "explanation": "The join returns one row per matched student: 2 for swimming, 3 for badminton and 3 for esport, for 8 rows. The two NULL sport numbers do not match, and sports with no students add no rows.",
          "references": [
            {
              "label": "Week 7 SQL, p. 9",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 9
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Student assignments summarised from the Week 7 example",
            "columns": [
              "sportNO",
              "Sport name",
              "Student count"
            ],
            "rows": [
              [
                "1",
                "swimming",
                "2"
              ],
              [
                "2",
                "badminton",
                "3"
              ],
              [
                "3",
                "esport",
                "3"
              ],
              [
                "4",
                "spelunking",
                "0"
              ],
              [
                "5",
                "pool",
                "0"
              ],
              [
                "6",
                "fencing",
                "0"
              ],
              [
                "NULL",
                "No matching sport",
                "2"
              ]
            ]
          }
        },
        {
          "id": "q31",
          "question": "What does student_enroll LEFT JOIN sport on sportNO return before any additional filtering?",
          "options": [
            {
              "key": "A",
              "text": "Eight assigned students"
            },
            {
              "key": "B",
              "text": "All ten students, with NULL sport names for two"
            },
            {
              "key": "C",
              "text": "Eight assigned students plus three unused sports"
            },
            {
              "key": "D",
              "text": "One row per sport"
            }
          ],
          "answer": "B",
          "explanation": "The result retains all student rows, including the two whose sport name is missing.",
          "references": [
            {
              "label": "Week 7 SQL, p. 10",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 10
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Student assignments summarised from the Week 7 example",
            "columns": [
              "sportNO",
              "Sport name",
              "Student count"
            ],
            "rows": [
              [
                "1",
                "swimming",
                "2"
              ],
              [
                "2",
                "badminton",
                "3"
              ],
              [
                "3",
                "esport",
                "3"
              ],
              [
                "4",
                "spelunking",
                "0"
              ],
              [
                "5",
                "pool",
                "0"
              ],
              [
                "6",
                "fencing",
                "0"
              ],
              [
                "NULL",
                "No matching sport",
                "2"
              ]
            ]
          }
        },
        {
          "id": "q32",
          "question": "Which join on sportNO keeps all sports, including sports with no students, but drops unassigned students when student_enroll is on the left?",
          "options": [
            {
              "key": "A",
              "text": "RIGHT JOIN"
            },
            {
              "key": "B",
              "text": "LEFT JOIN"
            },
            {
              "key": "C",
              "text": "INNER JOIN"
            },
            {
              "key": "D",
              "text": "FULL OUTER JOIN"
            }
          ],
          "answer": "A",
          "explanation": "SPORT is on the right. The right join keeps sports even when no student is enrolled.",
          "references": [
            {
              "label": "Week 7 SQL, p. 11",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 11
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Student assignments summarised from the Week 7 example",
            "columns": [
              "sportNO",
              "Sport name",
              "Student count"
            ],
            "rows": [
              [
                "1",
                "swimming",
                "2"
              ],
              [
                "2",
                "badminton",
                "3"
              ],
              [
                "3",
                "esport",
                "3"
              ],
              [
                "4",
                "spelunking",
                "0"
              ],
              [
                "5",
                "pool",
                "0"
              ],
              [
                "6",
                "fencing",
                "0"
              ],
              [
                "NULL",
                "No matching sport",
                "2"
              ]
            ]
          }
        },
        {
          "id": "q33",
          "question": "Which rows does a FULL OUTER JOIN preserve?",
          "options": [
            {
              "key": "A",
              "text": "Matched rows only"
            },
            {
              "key": "B",
              "text": "Matched rows and unmatched left rows only"
            },
            {
              "key": "C",
              "text": "Matched rows and unmatched right rows only"
            },
            {
              "key": "D",
              "text": "Matched rows and unmatched rows from both sides"
            }
          ],
          "answer": "D",
          "explanation": "A full outer join keeps matched rows and unmatched rows from both tables.",
          "references": [
            {
              "label": "Week 7 SQL, p. 7",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q36",
          "question": "What does this query retrieve?",
          "options": [
            {
              "key": "A",
              "text": "Only the price column"
            },
            {
              "key": "B",
              "text": "All rows and all columns"
            },
            {
              "key": "C",
              "text": "Only rows priced below 2.00"
            },
            {
              "key": "D",
              "text": "Only the row with P_CODE 311452"
            }
          ],
          "answer": "B",
          "explanation": "The slide uses SELECT * FROM products to retrieve all rows and all columns.",
          "references": [
            {
              "label": "Week 7 SQL, p. 14",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 14
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Query from the slide",
            "content": "SELECT * FROM products;"
          }
        },
        {
          "id": "q34",
          "question": "The products table has a price column. Which filter retrieves rows priced strictly below 2.00?",
          "options": [
            {
              "key": "A",
              "text": "WHERE price > 2.00"
            },
            {
              "key": "B",
              "text": "WHERE price <= 2.00"
            },
            {
              "key": "C",
              "text": "WHERE price < 2.00"
            },
            {
              "key": "D",
              "text": "WHERE price = 2.00"
            }
          ],
          "answer": "C",
          "explanation": "The slide uses WHERE price < 2.00 to select products priced below 2.00. The strict inequality excludes 2.00 itself.",
          "references": [
            {
              "label": "Week 7 SQL, p. 14",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 14
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q27",
          "question": "Which SQL operator can replace prod_price >= 50 AND prod_price <= 100?",
          "options": [
            {
              "key": "A",
              "text": "LIKE"
            },
            {
              "key": "B",
              "text": "BETWEEN"
            },
            {
              "key": "C",
              "text": "NOT BETWEEN"
            },
            {
              "key": "D",
              "text": "<>"
            }
          ],
          "answer": "B",
          "explanation": "BETWEEN expresses an inclusive range: values equal to the lower or upper limit are included.",
          "references": [
            {
              "label": "Week 7 SQL, p. 20",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 20
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "text",
            "title": "Range filter from the slide",
            "content": "The product table has a prod_price column. The range starts at 50 and ends at 100, including both limits."
          }
        },
        {
          "id": "q28",
          "question": "Which Oracle SQL WHERE condition matches the product name SMALL WIDGET exactly?",
          "options": [
            {
              "key": "A",
              "text": "prod_name <> 'SMALL WIDGET'"
            },
            {
              "key": "B",
              "text": "prod_name = SMALL WIDGET"
            },
            {
              "key": "C",
              "text": "prod_name IS NULL"
            },
            {
              "key": "D",
              "text": "prod_name = 'SMALL WIDGET'"
            }
          ],
          "answer": "D",
          "explanation": "The slide uses = for an exact text match and encloses the text literal SMALL WIDGET in single quotes.",
          "references": [
            {
              "label": "Week 7 SQL, p. 24",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 24
            }
          ],
          "referenceLabel": "Review source",
          "context": {
            "type": "table",
            "title": "Product row shown in the lecture result",
            "columns": [
              "PROD_NAME",
              "PROD_PRICE",
              "PROD_COLOR"
            ],
            "rows": [
              [
                "SMALL WIDGET",
                "99.9",
                "RED"
              ]
            ]
          }
        }
      ],
      "references": [
        {
          "label": "Week 7 SQL, p. 9",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 9
        },
        {
          "label": "Week 7 SQL, p. 10",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 10
        },
        {
          "label": "Week 7 SQL, p. 11",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 11
        },
        {
          "label": "Week 7 SQL, p. 7",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 7
        },
        {
          "label": "Week 7 SQL, p. 14",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 14
        },
        {
          "label": "Week 7 SQL, p. 20",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 20
        },
        {
          "label": "Week 7 SQL, p. 24",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
          "page": 24
        }
      ]
    },
    {
      "id": "sec-5",
      "code": "5",
      "title": "5. Draw the Mini Library ERD",
      "type": "practical-exercise",
      "description": "Adapted from Week 4 Practical, page 1. Complete this crow’s-foot modeling exercise, then reveal the reference solution below.",
      "brief": [
        "Draw a crow’s-foot ERD without answer choices. Include attributes, primary and foreign keys, relationship verbs, and minimum and maximum participation at both ends.",
        "Every member has a unique Member ID and may have zero or many loans. Each loan belongs to exactly one member. Every book title has a unique Book ID and one or more physical copies. Each copy has its own Copy ID and belongs to exactly one title. Every loan refers to one physical copy. A copy may be loaned many times over its lifetime. Assume a new copy may have no loan history. Record borrowed, due and return dates; return date is empty until the copy is returned.",
        "Each physical copy may have at most one active loan at a time, and each member may borrow at most three physical copies at the same time. A loan is active while its return date is empty. Below your ERD, explain why returned loans do not count towards either limit, even though their records remain in the database."
      ],
      "solution": {
        "title": "Reveal model ERD",
        "diagram": "MEMBER       ||────────o{  LOAN       records\nBOOK_TITLE   ||────────|{  BOOK_COPY  has\nBOOK_COPY    ||────────o{  LOAN       appears in",
        "legend": "|| exactly one; o{ zero or many; |{ one or many. Read the marks at the opposite end from the entity you start with.",
        "entities": [
          "MEMBER: MemberID (PK).",
          "BOOK_TITLE: BookID (PK).",
          "BOOK_COPY: CopyID (PK), BookID (FK, required).",
          "LOAN: LoanID (PK; added for this model), MemberID and CopyID (FKs, required), BorrowDate, DueDate, ReturnDate (nullable)."
        ],
        "activeLoanLimits": "A copy may have at most one active loan and cannot be borrowed while already on loan. A member may borrow at most three copies at once. ReturnDate stays empty until the copy is returned.",
        "references": "Week 4 Practical ERD, p. 1: Mini Library business rules BR1–BR10. Week 3 ER modelling, p. 4: crow’s-foot notation. The practical gives the rules, not a completed diagram; LoanID is a model choice."
      },
      "references": [
        {
          "label": "Week 4 ERD practical, p. 1",
          "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
          "page": 1
        },
        {
          "label": "Week 3 ER modelling, p. 4",
          "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
          "page": 4
        }
      ]
    },
    {
      "id": "sec-mix-01",
      "code": "6",
      "title": "Mix Quiz 01 — Core Concepts",
      "description": "Mixed revision: relational rules, ER modelling and keys, normalisation, and SQL.",
      "items": [
        {
          "question": "The Mini Library's LOAN table keeps both current and returned loans. A loan is active when ReturnDate is NULL. The library limits how many physical copies each member can have on loan at the same time. Which LOAN rows should count towards the limit for a particular member?",
          "options": [
            {
              "key": "A",
              "text": "Rows for that member with ReturnDate IS NULL"
            },
            {
              "key": "B",
              "text": "All rows for that member, regardless of ReturnDate"
            },
            {
              "key": "C",
              "text": "Rows for any member with ReturnDate IS NULL"
            },
            {
              "key": "D",
              "text": "All LOAN rows, regardless of member or ReturnDate"
            }
          ],
          "answer": "A",
          "explanation": "The limit applies only to the particular member's current loans. Filtering by member excludes other members' loans, and ReturnDate IS NULL excludes loans that have already been returned.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 Practical ERD pt2 Oxt26, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ],
          "id": "mix01-q01"
        },
        {
          "question": "In the bookstore ERD, each order item refers to one order and one book. Which pair of references belongs in ORDER_ITEMS?",
          "options": [
            {
              "key": "A",
              "text": "User_ID and Author_ID"
            },
            {
              "key": "B",
              "text": "Book_ID and Author_ID"
            },
            {
              "key": "C",
              "text": "Order_ID and Book_ID"
            },
            {
              "key": "D",
              "text": "Order_ID and User_ID"
            }
          ],
          "answer": "C",
          "explanation": "The two references connect the order item to the order it belongs to and the book it records.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "WEEK 3 ERD Sep26, p. 3",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ],
          "id": "mix01-q02"
        },
        {
          "question": "SPORT contains sport numbers 1 and 2. STUDENT_ENROLL contains (SID 10, sportNO 1) and (SID 11, sportNO NULL). What does a FULL OUTER JOIN on sportNO return?",
          "options": [
            {
              "key": "A",
              "text": "Only the match for sport 1"
            },
            {
              "key": "B",
              "text": "The match and SID 11 only"
            },
            {
              "key": "C",
              "text": "The match and sport 2 only"
            },
            {
              "key": "D",
              "text": "The match, SID 11 without a sport, and sport 2 without a student"
            }
          ],
          "answer": "D",
          "explanation": "A full outer join includes the match and both unmatched rows, filling missing columns with NULL.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 7 - SQL Joins and Data Filtering 11Nov26, p. 12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 12
            }
          ],
          "id": "mix01-q03"
        },
        {
          "question": "The Week 4 example records Biology 2 only in Susan Johnson’s student row. Which design lets the school delete Susan’s record without losing Biology 2?",
          "options": [
            {
              "key": "A",
              "text": "Store classes separately and link students to classes"
            },
            {
              "key": "B",
              "text": "Sort the combined table by class"
            },
            {
              "key": "C",
              "text": "Rename the class before deleting Susan"
            },
            {
              "key": "D",
              "text": "Store the class twice in Susan’s row"
            }
          ],
          "answer": "A",
          "explanation": "Keeping classes independently means removing a student does not remove the only record of the class.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 - Normalization of Database Table 21 Oct 26, p. 11",
              "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf",
              "page": 11
            }
          ],
          "id": "mix01-q04"
        },
        {
          "question": "A travel booking already has a payment transaction. The agency requires exactly one associated payment transaction per booking. Which action violates this rule?",
          "options": [
            {
              "key": "A",
              "text": "Keeping the existing payment"
            },
            {
              "key": "B",
              "text": "Adding a second payment while keeping the first"
            },
            {
              "key": "C",
              "text": "Looking up the linked payment"
            },
            {
              "key": "D",
              "text": "Correcting a detail on the existing payment"
            }
          ],
          "answer": "B",
          "explanation": "A second associated transaction would give the booking two payments.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer, p. 11",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 11
            }
          ],
          "id": "mix01-q05"
        },
        {
          "question": "A child entity cannot exist without its parent, and its primary key includes the parent’s key. How does the Week 3 lecture classify the child?",
          "options": [
            {
              "key": "A",
              "text": "Strong entity"
            },
            {
              "key": "B",
              "text": "Derived attribute"
            },
            {
              "key": "C",
              "text": "Weak entity"
            },
            {
              "key": "D",
              "text": "Alternate key"
            }
          ],
          "answer": "C",
          "explanation": "The weak entity is existence-dependent and its key is partly or wholly derived from its parent.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 3 - Entity Relationship Modelling 14 Oct 2026, p. 17",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 17
            }
          ],
          "id": "mix01-q06"
        },
        {
          "question": "A 1NF inventory table has primary key (Player_Id, Item) and only one non-key attribute, Quantity. Quantity requires both key columns. Which conclusion follows?",
          "options": [
            {
              "key": "A",
              "text": "Quantity is a repeating group"
            },
            {
              "key": "B",
              "text": "Item alone is the primary key"
            },
            {
              "key": "C",
              "text": "Quantity has a partial dependency"
            },
            {
              "key": "D",
              "text": "The table meets the 2NF requirement"
            }
          ],
          "answer": "D",
          "explanation": "The non-key attribute depends on the entire key, so there is no partial dependency.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 5 - Normalization of Database Table  28 Oct 26, p. 25",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 25
            }
          ],
          "id": "mix01-q07"
        },
        {
          "question": "In FROM club c, what does c mean in WHERE c.clubname = 'pool'?",
          "options": [
            {
              "key": "A",
              "text": "An alias for the club table"
            },
            {
              "key": "B",
              "text": "A new database table"
            },
            {
              "key": "C",
              "text": "An alias for the literal pool"
            },
            {
              "key": "D",
              "text": "A second filter condition"
            }
          ],
          "answer": "A",
          "explanation": "The alias c is a short name for club within the query and qualifies clubname.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 7 - SQL Joins and Data Filtering 11Nov26, p. 5",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 5
            }
          ],
          "id": "mix01-q08"
        },
        {
          "question": "The Mini Library allows each physical copy to have only one active loan at a time. Copy C01 is on loan, and its ReturnDate is empty because it has not been returned. Can another member borrow that same physical copy now?",
          "options": [
            {
              "key": "A",
              "text": "Yes, because the borrower is different"
            },
            {
              "key": "B",
              "text": "No, because C01 already has an active loan"
            },
            {
              "key": "C",
              "text": "Yes, because the title may have other copies"
            },
            {
              "key": "D",
              "text": "No, because a physical copy can only be borrowed once"
            }
          ],
          "answer": "B",
          "explanation": "C01 has not been returned, so its loan is still active. The limit applies to the physical copy, regardless of who wants to borrow it. Another copy of the same title might be available, but C01 cannot be lent again until it is returned.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 Practical ERD pt2 Oxt26, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ],
          "id": "mix01-q09"
        },
        {
          "question": "A design is already in 2NF. A non-key column B determines another non-key column C, and the primary key A determines B. What change follows the 3NF conversion shown in the lecture?",
          "options": [
            {
              "key": "A",
              "text": "Repeat C in more rows"
            },
            {
              "key": "B",
              "text": "Make A and C a repeating group"
            },
            {
              "key": "C",
              "text": "Store C with its determinant B in a separate table and retain B as the link"
            },
            {
              "key": "D",
              "text": "Remove B and C without preserving their values"
            }
          ],
          "answer": "C",
          "explanation": "The dependency A → B → C is indirect. Moving C with B keeps the fact with its determinant.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 - Normalization of Database Table 21 Oct 26, p. 33",
              "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf",
              "page": 33
            }
          ],
          "id": "mix01-q10"
        }
      ],
      "references": []
    },
    {
      "id": "sec-mix-02",
      "code": "7",
      "title": "Mix Quiz 02 — Applied Practice",
      "description": "Mixed revision: relational rules, ER modelling and keys, normalisation, and SQL.",
      "items": [
        {
          "question": "A university tracks attendance separately for each student in each course. A student can enrol in several courses, and a course can have many students. The database stores one ENROLMENT row for each student–course pair. The university stores one attendance percentage per student per course. Which table should store AttendancePercentage?",
          "options": [
            {
              "key": "A",
              "text": "STUDENT"
            },
            {
              "key": "B",
              "text": "COURSE"
            },
            {
              "key": "C",
              "text": "DEPARTMENT"
            },
            {
              "key": "D",
              "text": "ENROLMENT"
            }
          ],
          "answer": "D",
          "explanation": "AttendancePercentage belongs in ENROLMENT because it describes one student in one course. A student can have different attendance percentages in different courses, and students in the same course can have different percentages. Neither STUDENT nor COURSE identifies the student–course pair.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer, p. 15",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 15
            }
          ],
          "id": "mix02-q01"
        },
        {
          "question": "A bookstore user has already reviewed a book. The REVIEWS primary key is (User_ID, Book_ID). What prevents that user from adding a second review for the same book?",
          "options": [
            {
              "key": "A",
              "text": "The same key pair would be repeated"
            },
            {
              "key": "B",
              "text": "The user ID can never appear in another review"
            },
            {
              "key": "C",
              "text": "The book ID can never appear in another review"
            },
            {
              "key": "D",
              "text": "All reviews must have the same date"
            }
          ],
          "answer": "A",
          "explanation": "The pair must be unique. Either ID may appear again with a different partner.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "WEEK 3 ERD Sep26, p. 4",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 4
            }
          ],
          "id": "mix02-q02"
        },
        {
          "question": "STUDENT_ENROLL has SID 21 with sportNO 1 and SID 34 with sportNO NULL. SPORT has (1, swimming). With students on the left, what sport name accompanies SID 34 after LEFT JOIN on sportNO?",
          "options": [
            {
              "key": "A",
              "text": "swimming"
            },
            {
              "key": "B",
              "text": "NULL"
            },
            {
              "key": "C",
              "text": "The string 34"
            },
            {
              "key": "D",
              "text": "SID 34 is omitted"
            }
          ],
          "answer": "B",
          "explanation": "The left row is retained, but there is no matching sport row to supply a name.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 7 - SQL Joins and Data Filtering 11Nov26, p. 10",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 10
            }
          ],
          "id": "mix02-q03"
        },
        {
          "question": "Biology 1 appears in several records in a combined student–class table. The school renames it, but one occurrence is missed. Which symptom shows the update anomaly?",
          "options": [
            {
              "key": "A",
              "text": "A new class cannot be inserted"
            },
            {
              "key": "B",
              "text": "Deleting a student removes the class"
            },
            {
              "key": "C",
              "text": "The same class now has inconsistent names"
            },
            {
              "key": "D",
              "text": "The table is sorted by student"
            }
          ],
          "answer": "C",
          "explanation": "Only some copies of the same fact were changed, leaving two names for Biology 1.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 - Normalization of Database Table 21 Oct 26, p. 10",
              "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf",
              "page": 10
            }
          ],
          "id": "mix02-q04"
        },
        {
          "question": "The Mini Café buys the same ingredient from different suppliers at different prices. Which record should hold the supplier-specific price?",
          "options": [
            {
              "key": "A",
              "text": "Ingredient alone"
            },
            {
              "key": "B",
              "text": "Supplier alone"
            },
            {
              "key": "C",
              "text": "Menu category"
            },
            {
              "key": "D",
              "text": "The supplier–ingredient association"
            }
          ],
          "answer": "D",
          "explanation": "The price belongs to the arrangement between a specific supplier and a specific ingredient.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 Practical ERD pt2 Oxt26, p. 2",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 2
            }
          ],
          "id": "mix02-q05"
        },
        {
          "question": "Each travel agency review must link to exactly one customer and exactly one booking. Which proposed review can be saved?",
          "options": [
            {
              "key": "A",
              "text": "One customer and one booking"
            },
            {
              "key": "B",
              "text": "One customer and several bookings"
            },
            {
              "key": "C",
              "text": "Several customers and one booking"
            },
            {
              "key": "D",
              "text": "One booking and no customer"
            }
          ],
          "answer": "A",
          "explanation": "The case specifies one customer and one booking for each review.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer, p. 11",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 11
            }
          ],
          "id": "mix02-q06"
        },
        {
          "question": "A numeric height column contains the entry “between 168 and 171”. In the lecture’s 1NF height example, what is wrong with that entry?",
          "options": [
            {
              "key": "A",
              "text": "It repeats a primary key"
            },
            {
              "key": "B",
              "text": "It is a text range rather than a single numeric height"
            },
            {
              "key": "C",
              "text": "It should be sorted first"
            },
            {
              "key": "D",
              "text": "It creates a foreign-key relationship"
            }
          ],
          "answer": "B",
          "explanation": "The numeric column is for individual numeric heights, not a textual range.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 5 - Normalization of Database Table  28 Oct 26, p. 11",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf",
              "page": 11
            }
          ],
          "id": "mix02-q07"
        },
        {
          "question": "Using the input rows and query shown, which result row set is returned?",
          "options": [
            {
              "key": "A",
              "text": "(101, Aisha, swimming) only"
            },
            {
              "key": "B",
              "text": "(101, Aisha, swimming) and (102, Ben, badminton)"
            },
            {
              "key": "C",
              "text": "(102, Ben, badminton) only"
            },
            {
              "key": "D",
              "text": "(101, Aisha, swimming) and (103, Chen, NULL)"
            }
          ],
          "answer": "A",
          "explanation": "The INNER JOIN first keeps only rows whose sportNO matches a SPORT row, so Chen is excluded. The WHERE condition then keeps only the swimming match, so Ben's badminton row is excluded.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 7 SQL inner join, p. 9",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 9
            },
            {
              "label": "Week 7 SQL row filtering, p. 14",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 14
            }
          ],
          "id": "mix02-q08",
          "context": {
            "type": "text",
            "title": "Student sport query input and SQL",
            "content": "student_enroll(SID, SNAME, sportNO): (101, Aisha, 1); (102, Ben, 2); (103, Chen, NULL). sport(sportNO, sportNAME): (1, swimming); (2, badminton). Query: SELECT se.SID, se.SNAME, sp.sportNAME FROM student_enroll se INNER JOIN sport sp ON se.sportNO = sp.sportNO WHERE sp.sportNAME = 'swimming';"
          }
        },
        {
          "question": "The Week 4 process converts a table from 1NF to 2NF. A non-key attribute depends on just one column of a two-column primary key. What should happen to that attribute?",
          "options": [
            {
              "key": "A",
              "text": "Leave it because all cells are atomic"
            },
            {
              "key": "B",
              "text": "Remove the key that really determines it"
            },
            {
              "key": "C",
              "text": "Duplicate it in every matching row"
            },
            {
              "key": "D",
              "text": "Move it to a table keyed by the column that determines it"
            }
          ],
          "answer": "D",
          "explanation": "2NF removes partial dependencies by separating the attribute with the part of the key that determines it.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 - Normalization of Database Table 21 Oct 26, p. 30",
              "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf",
              "page": 30
            }
          ],
          "id": "mix02-q09"
        },
        {
          "question": "In the Mini Library, each title has one or more physical copies, and each physical copy belongs to exactly one title. Which pair of crow’s-foot multiplicities represents these rules, in this order: copies per title; titles per copy?",
          "options": [
            {
              "key": "A",
              "text": "1..*; 1..1"
            },
            {
              "key": "B",
              "text": "0..*; 1..1"
            },
            {
              "key": "C",
              "text": "1..*; 0..1"
            },
            {
              "key": "D",
              "text": "1..1; 1..*"
            }
          ],
          "answer": "A",
          "explanation": "A title must be related to one or more copies, so copies per title is 1..*. Each physical copy belongs to exactly one title, so titles per copy is 1..1.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 4 Practical ERD pt2 Oxt26, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ],
          "id": "mix02-q10"
        }
      ],
      "references": []
    },
    {
      "id": "sec-mix-03",
      "code": "8",
      "title": "Mix Quiz 03 — Normalisation and Oracle SQL Practical",
      "description": "Applied practice in normalisation, keys, Oracle constraints, datatypes and row filtering.",
      "items": [
        {
          "id": "mix03-q01",
          "question": "Mary has two results for MT02: grade F in semester 1 and grade C in semester 3. Assume a student can have at most one result per subject per semester. Which composite key identifies each result?",
          "options": [
            {
              "key": "A",
              "text": "StudentID, SubjectCode"
            },
            {
              "key": "B",
              "text": "StudentID, SubjectCode, Semester"
            },
            {
              "key": "C",
              "text": "SubjectCode, Semester"
            },
            {
              "key": "D",
              "text": "StudentID, Semester"
            }
          ],
          "answer": "B",
          "explanation": "The same student–subject pair can recur. Semester distinguishes attempts, while both IDs identify whose result and which subject.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W5&6_Normalization_Oct26, p. 4",
              "file": "reference/Oracle APEX/W5&6_Normalization_Oct26.pdf",
              "page": 4
            }
          ]
        },
        {
          "id": "mix03-q02",
          "question": "PERSONS has primary key PersonID and contains only P01. ORDERS has a foreign key PersonID referencing PERSONS. Which proposed non-NULL PersonID can be inserted into an otherwise valid order?",
          "options": [
            {
              "key": "A",
              "text": "P02"
            },
            {
              "key": "B",
              "text": "P03"
            },
            {
              "key": "C",
              "text": "P01"
            },
            {
              "key": "D",
              "text": "P04"
            }
          ],
          "answer": "C",
          "explanation": "A non-NULL foreign key must match an existing parent key; only P01 exists.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W7 SQL_intro Sep 2026, p. 7",
              "file": "reference/Oracle APEX/W7 SQL_intro Sep 2026.pdf",
              "page": 7
            }
          ]
        },
        {
          "id": "mix03-q03",
          "question": "Tweedy (PetID 519) received procedures 20 and 12 on 30 April 2021. A report stores one row per procedure performed. Why is (PetID, VisitDate) not a valid primary key for this report?",
          "options": [
            {
              "key": "A",
              "text": "Both rows share that pair"
            },
            {
              "key": "B",
              "text": "Both rows have different dates"
            },
            {
              "key": "C",
              "text": "Both rows have different pet IDs"
            },
            {
              "key": "D",
              "text": "The pair includes the procedure code"
            }
          ],
          "answer": "A",
          "explanation": "The pet and date repeat even though the procedures differ, so the pair does not uniquely identify a row.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W5&6_Normalization_Oct26, p. 2",
              "file": "reference/Oracle APEX/W5&6_Normalization_Oct26.pdf",
              "page": 2
            }
          ]
        },
        {
          "id": "mix03-q04",
          "question": "PRODUCT contains B-100 (quantity 10), S-201 (300), N-122 (400) and B-101 (50). Which IDs remain after DELETE FROM product WHERE quantity > 280?",
          "options": [
            {
              "key": "A",
              "text": "S-201 and N-122"
            },
            {
              "key": "B",
              "text": "B-100 and S-201"
            },
            {
              "key": "C",
              "text": "N-122 and B-101"
            },
            {
              "key": "D",
              "text": "B-100 and B-101"
            }
          ],
          "answer": "D",
          "explanation": "DELETE removes the rows that satisfy the filter. Quantities 10 and 50 do not satisfy it, so their rows remain.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W7 SQL_intro Sep 2026, p. 6",
              "file": "reference/Oracle APEX/W7 SQL_intro Sep 2026.pdf",
              "page": 6
            }
          ]
        },
        {
          "id": "mix03-q05",
          "question": "COURSE(CID, CName, School, SCEXT) has primary key CID. Each course belongs to one school, and each school has one extension (SCEXT). Which decomposition preserves all facts and removes the transitive dependency?",
          "options": [
            {
              "key": "A",
              "text": "COURSE(CID, CName, SCEXT); SCHOOL(School)"
            },
            {
              "key": "B",
              "text": "COURSE(CID, CName, School); SCHOOL(School, SCEXT)"
            },
            {
              "key": "C",
              "text": "COURSE(CID, School, SCEXT); SCHOOL(School, CName)"
            },
            {
              "key": "D",
              "text": "COURSE(CID, CName); SCHOOL(School, SCEXT)"
            }
          ],
          "answer": "B",
          "explanation": "School determines SCEXT. Keeping School in COURSE preserves the link, while storing SCEXT in SCHOOL removes the indirect dependency from COURSE.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W5&6_Normalization_Oct26, p. 2",
              "file": "reference/Oracle APEX/W5&6_Normalization_Oct26.pdf",
              "page": 2
            }
          ]
        },
        {
          "id": "mix03-q06",
          "question": "In the PERSONS table, Age has CHECK (Age >= 0 AND Age <= 120) and NOT NULL. With all other columns valid, which Age is accepted?",
          "options": [
            {
              "key": "A",
              "text": "NULL"
            },
            {
              "key": "B",
              "text": "-1"
            },
            {
              "key": "C",
              "text": "120"
            },
            {
              "key": "D",
              "text": "121"
            }
          ],
          "answer": "C",
          "explanation": "120 meets the inclusive upper bound. NULL violates NOT NULL, and −1 and 121 are outside the allowed range.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W7 SQL_intro Sep 2026, p. 7",
              "file": "reference/Oracle APEX/W7 SQL_intro Sep 2026.pdf",
              "page": 7
            }
          ]
        },
        {
          "id": "mix03-q07",
          "question": "Each product has one price regardless of colour. Product 1 costs 15.99 and comes in red and green. Which design stores each colour separately without duplicating the product price?",
          "options": [
            {
              "key": "A",
              "text": "PRODUCT(ProductID, Price) and PRODUCT_COLOUR(ProductID, Colour)"
            },
            {
              "key": "B",
              "text": "PRODUCT(ProductID, ColourList, Price)"
            },
            {
              "key": "C",
              "text": "PRODUCT(ProductID, Colour1, Colour2, Price)"
            },
            {
              "key": "D",
              "text": "PRODUCT(ProductID, Colour, Price), one row per colour"
            }
          ],
          "answer": "A",
          "explanation": "Store the price once per product and one colour per PRODUCT_COLOUR row. A list or numbered columns keep a repeating group; a flat row per colour repeats the price.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W5&6_Normalization_Oct26, p. 4",
              "file": "reference/Oracle APEX/W5&6_Normalization_Oct26.pdf",
              "page": 4
            }
          ]
        },
        {
          "id": "mix03-q08",
          "question": "POSTS has primary key PostID and CATEGORIES has primary key CategoryID. PostCategories(PostID, CategoryID) allows many categories per post and many posts per category, but no duplicate pair. Which constraints implement these rules?",
          "options": [
            {
              "key": "A",
              "text": "A primary key on PostID and a foreign key on CategoryID only"
            },
            {
              "key": "B",
              "text": "Separate UNIQUE constraints on both columns plus both foreign keys"
            },
            {
              "key": "C",
              "text": "A composite primary key on both columns but no foreign keys"
            },
            {
              "key": "D",
              "text": "A composite primary key on both columns plus a foreign key from each column to its parent"
            }
          ],
          "answer": "D",
          "explanation": "The composite key prevents repeated pairs without blocking either ID from appearing in other pairs. The two foreign keys ensure both parent rows exist.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W7 SQL_intro Sep 2026, p. 9",
              "file": "reference/Oracle APEX/W7 SQL_intro Sep 2026.pdf",
              "page": 9
            }
          ]
        },
        {
          "id": "mix03-q09",
          "question": "A FreshMart receipt has one cashier. Assume CashierID determines CashierName, and the same cashier can issue many receipts. Which design preserves the cashier link without repeating the cashier name on every receipt?",
          "options": [
            {
              "key": "A",
              "text": "RECEIPT(ReceiptNo, CashierName) only"
            },
            {
              "key": "B",
              "text": "RECEIPT(ReceiptNo, CashierID) and CASHIER(CashierID, CashierName)"
            },
            {
              "key": "C",
              "text": "RECEIPT(ReceiptNo, CashierID, CashierName) only"
            },
            {
              "key": "D",
              "text": "RECEIPT(ReceiptNo) and CASHIER(CashierID, CashierName) with no link"
            }
          ],
          "answer": "B",
          "explanation": "Store the name once with its determinant, CashierID. Keeping CashierID in RECEIPT identifies who issued each receipt.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W5&6_Normalization_Oct26, p. 5",
              "file": "reference/Oracle APEX/W5&6_Normalization_Oct26.pdf",
              "page": 5
            }
          ]
        },
        {
          "id": "mix03-q10",
          "question": "The STUDENT practical requires DOB to store an actual date and CGPA to store a numeric value with one decimal place. Which Oracle column definitions meet those requirements and can store a CGPA of 3.2?",
          "options": [
            {
              "key": "A",
              "text": "DOB VARCHAR2(20), CGPA NUMBER(2,1)"
            },
            {
              "key": "B",
              "text": "DOB DATE, CGPA NUMBER(2,0)"
            },
            {
              "key": "C",
              "text": "DOB DATE, CGPA NUMBER(2,1)"
            },
            {
              "key": "D",
              "text": "DOB NUMBER(8), CGPA VARCHAR2(3)"
            }
          ],
          "answer": "C",
          "explanation": "DATE represents a date, and NUMBER(2,1) has two total digits with one after the decimal point, so it can store 3.2.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "W7 SQL_intro Sep 2026, p. 5",
              "file": "reference/Oracle APEX/W7 SQL_intro Sep 2026.pdf",
              "page": 5
            }
          ]
        }
      ],
      "references": []
    }
  ]
};
