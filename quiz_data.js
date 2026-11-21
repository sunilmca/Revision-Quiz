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
          "question": "Each book can belong to several categories, and each category can contain several books. What relationship does the table represent?",
          "options": [
            {
              "key": "A",
              "text": "Many-to-many"
            },
            {
              "key": "B",
              "text": "One-to-one"
            },
            {
              "key": "C",
              "text": "One-to-many"
            },
            {
              "key": "D",
              "text": "Many-to-one"
            }
          ],
          "answer": "A",
          "explanation": "B01 occurs in two categories, and Computing contains two books. A junction table records one pairing per row in this many-to-many relationship.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Relationships, p. 8",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 8
            }
          ],
          "context": {
            "type": "table",
            "title": "Book–Category junction table — illustrative rows",
            "columns": [
              "Book ID",
              "Category"
            ],
            "rows": [
              [
                "B01",
                "Computing"
              ],
              [
                "B01",
                "Education"
              ],
              [
                "B02",
                "Computing"
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
          "question": "A travel agency records customers, bookings, agents and packages. Which booking restriction matches the lecture’s business rules?",
          "options": [
            {
              "key": "A",
              "text": "A booking can be handled by only one agent."
            },
            {
              "key": "B",
              "text": "Every booking needs two agents."
            },
            {
              "key": "C",
              "text": "A booking can contain any number of packages."
            },
            {
              "key": "D",
              "text": "A customer must book twice per day."
            }
          ],
          "answer": "A",
          "explanation": "The slide limits each booking to one agent and one package. It also limits customers to one booking per day.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Travel agency business rules, p. 11",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 11
            }
          ]
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
          "question": "NULL values: What can you conclude from the NULL in John’s Phone No. column?",
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
            "content": "ORDER_ITEMS(Order_ID, Book_ID, Quantity, Price). Each row records one book on an order."
          }
        },
        {
          "id": "q11",
          "question": "In the Mini Library, each book title has one or more copies. Which foreign key links each physical copy to its title?",
          "options": [
            {
              "key": "A",
              "text": "Title.CopyID"
            },
            {
              "key": "B",
              "text": "Loan.BookID instead of CopyID"
            },
            {
              "key": "C",
              "text": "Copy.BookID"
            },
            {
              "key": "D",
              "text": "Member.BookID"
            }
          ],
          "answer": "C",
          "explanation": "Each physical copy belongs to exactly one title. The copy therefore carries the book title’s BookID as its foreign key.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q14",
          "question": "A library title may have multiple physical copies, each identified by its own Copy ID. What does one loan record track in the Mini Library rules?",
          "options": [
            {
              "key": "A",
              "text": "A book title only"
            },
            {
              "key": "B",
              "text": "Several physical copies"
            },
            {
              "key": "C",
              "text": "Exactly one physical copy"
            },
            {
              "key": "D",
              "text": "A copy only after it is returned"
            }
          ],
          "answer": "C",
          "explanation": "The practical says a loan refers to exactly one physical copy, not just its title.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ],
          "referenceLabel": "Review source"
        },
        {
          "id": "q12",
          "question": "In the Mini Café, an order can list several menu items and the same item can appear on different orders. The café records the quantity ordered for each item on each order. Where does that quantity belong?",
          "options": [
            {
              "key": "A",
              "text": "Order–item bridge"
            },
            {
              "key": "B",
              "text": "Menu item"
            },
            {
              "key": "C",
              "text": "Customer"
            },
            {
              "key": "D",
              "text": "Menu category"
            }
          ],
          "answer": "A",
          "explanation": "The practical records quantity for each menu item included in an order. It belongs to the order–menu item association, not to the menu item alone.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 2",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 2
            }
          ],
          "referenceLabel": "Review source"
        }
      ],
      "references": [
        {
          "label": "Week 3 ER modelling, p. 6",
          "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
          "page": 6
        },
        {
          "label": "Week 3 ER modelling, p. 9",
          "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
          "page": 9
        },
        {
          "label": "Week 3 bookstore practical, p. 3",
          "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
          "page": 3
        },
        {
          "label": "Week 3 bookstore practical, p. 4",
          "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
          "page": 4
        },
        {
          "label": "Week 4 ERD practical, p. 1",
          "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
          "page": 1
        },
        {
          "label": "Week 4 ERD practical, p. 2",
          "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
          "page": 2
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
          "explanation": "Player_Id determines Player_Skill_level, which determines Player_rating. The rating therefore depends on Player_Id indirectly.",
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
            "title": "Player table before decomposition",
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
            "title": "Player table before decomposition",
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
          "question": "Which ON condition does the slide use to match student alias se to sport alias sp?",
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
          "explanation": "The displayed inner join result contains eight rows. Students without a matching sport are not included.",
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
              "Student sportNO",
              "Sport name",
              "Students"
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
              "Student sportNO",
              "Sport name",
              "Students"
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
              "Student sportNO",
              "Sport name",
              "Students"
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
          "question": "Which WHERE condition matches the product name SMALL WIDGET exactly, using the syntax shown on the slide?",
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
        "Below the ERD, write the borrowing limits stated in BR7, BR9 and BR10."
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
    }
  ]
};
