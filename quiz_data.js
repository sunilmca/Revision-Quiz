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
          "question": "Why does a designer create a data model before building a database?",
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
          "question": "In the lecture’s library book example, which is an attribute?",
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
          ]
        },
        {
          "id": "q3",
          "question": "Which relationship requires a junction table in the lecture’s examples?",
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
          "explanation": "A pupil can attend multiple lessons and a lesson can have multiple pupils. A junction table records those associations.",
          "referenceLabel": "Review source",
          "references": [
            {
              "label": "Week 2: Relationships, p. 8",
              "file": "reference/Oracle APEX/Week 2 - Data Model & Relational Database Model 7 Oct 2026 StuVer.pdf",
              "page": 8
            }
          ]
        },
        {
          "id": "q4",
          "question": "Which rule illustrates a data integrity constraint?",
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
          "question": "Which booking rule is stated in the travel agency example?",
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
          "question": "Which model shows entities and their relationships at a high level?",
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
          "question": "What do relational set operators manipulate?",
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
          "id": "q7",
          "question": "An employee has one address split into street and postcode. How is it classified?",
          "options": [
            {
              "key": "A",
              "text": "Simple, multivalued"
            },
            {
              "key": "B",
              "text": "Derived, multivalued"
            },
            {
              "key": "C",
              "text": "Composite, single-valued"
            },
            {
              "key": "D",
              "text": "Simple, derived"
            }
          ],
          "answer": "C",
          "explanation": "It has parts, but only one address per employee.",
          "references": [
            {
              "label": "Week 3 attributes and keys, pp. 6–11",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 6
            }
          ]
        },
        {
          "id": "q8",
          "question": "Quantity times unit price gives LineTotal. What kind of attribute is it?",
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
          "explanation": "It is calculated from other attributes.",
          "references": [
            {
              "label": "Week 3 attributes and keys, pp. 6–11",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 6
            }
          ]
        },
        {
          "id": "q9",
          "question": "UserID and Email are each required and independently unique. UserID is the PK. What is Email?",
          "options": [
            {
              "key": "A",
              "text": "Part of the PK"
            },
            {
              "key": "B",
              "text": "Foreign key"
            },
            {
              "key": "C",
              "text": "Surrogate key"
            },
            {
              "key": "D",
              "text": "Alternate key"
            }
          ],
          "answer": "D",
          "explanation": "A candidate key not selected as PK is an alternate key.",
          "references": [
            {
              "label": "Week 3 attributes and keys, pp. 6–11",
              "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
              "page": 6
            }
          ]
        },
        {
          "id": "q10",
          "question": "A user may place orders; each order must belong to exactly one user. How many orders per user, and users per order?",
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
          "explanation": "Read each direction independently.",
          "references": [
            {
              "label": "Week 3 ERD practical, pp. 3–4",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ]
        },
        {
          "id": "q11",
          "question": "Each physical copy belongs to one book title. Where does the FK go?",
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
          "explanation": "The FK goes on the many side and references the title.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ]
        },
        {
          "id": "q12",
          "question": "Orders contain menu items; items appear in many orders. Where does quantity ordered go?",
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
          "explanation": "Quantity describes an item on a particular order.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ]
        },
        {
          "id": "q13",
          "question": "ORDER_ITEMS has PK (OrderID, BookID). Existing pairs: (101,12), (101,15). Which pair violates the PK?",
          "options": [
            {
              "key": "A",
              "text": "102,12"
            },
            {
              "key": "B",
              "text": "101,16"
            },
            {
              "key": "C",
              "text": "103,15"
            },
            {
              "key": "D",
              "text": "101,12"
            }
          ],
          "answer": "D",
          "explanation": "The combination, not each component, must be unique.",
          "references": [
            {
              "label": "Week 3 ERD practical, pp. 3–4",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ]
        },
        {
          "id": "q14",
          "question": "What ensures every loan references an existing copy?",
          "options": [
            {
              "key": "A",
              "text": "UNIQUE only"
            },
            {
              "key": "B",
              "text": "FK only"
            },
            {
              "key": "C",
              "text": "NOT NULL plus FK to COPY"
            },
            {
              "key": "D",
              "text": "NOT NULL only"
            }
          ],
          "answer": "C",
          "explanation": "NOT NULL requires a value; the FK checks its existence.",
          "references": [
            {
              "label": "Week 4 ERD practical, p. 1",
              "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
              "page": 1
            }
          ]
        },
        {
          "id": "q15",
          "question": "A circle and crow’s foot at the ORDER end of a User–Order relationship mean what?",
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
          "explanation": "The circle denotes zero minimum; the fork means many maximum.",
          "references": [
            {
              "label": "Week 3 ERD practical, pp. 3–4",
              "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
              "page": 3
            }
          ]
        }
      ],
      "references": [
        {
          "label": "Week 3 ER modelling, p. 4",
          "file": "reference/Oracle APEX/Week 3 - Entity Relationship Modelling 14 Oct 2026.pdf",
          "page": 4
        },
        {
          "label": "Week 3 ERD practical, pp. 3–4",
          "file": "reference/Oracle APEX/WEEK 3 ERD Sep26.pdf",
          "page": 3
        },
        {
          "label": "Week 4 ERD practical, p. 1",
          "file": "reference/Oracle APEX/Week 4 Practical ERD pt2 Oxt26.pdf",
          "page": 1
        }
      ]
    },
    {
      "id": "sec-3",
      "code": "3",
      "title": "3. Database tables and normalization",
      "description": "Modification anomalies (insertion, deletion, update), 1NF/2NF/3NF dependencies, candidate keys, and lossless decomposition.",
      "items": [
        {
          "id": "q16",
          "question": "A student&#x27;s address is repeated across enrolments. Only one row is changed. What results?",
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
          "explanation": "Different rows now disagree about the same fact.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ]
        },
        {
          "id": "q17",
          "question": "A subject cannot be added until a student enrols. What is this?",
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
          "explanation": "An independent fact cannot be added by itself.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ]
        },
        {
          "id": "q18",
          "question": "Deleting the last enrolment erases the only record of the subject’s credit value. What is this?",
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
          "explanation": "Deleting one fact unintentionally removes another.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            }
          ]
        },
        {
          "id": "q19",
          "question": "Several subject codes are stored in a single cell in a 0NF table. Which change addresses this for 1NF?",
          "options": [
            {
              "key": "A",
              "text": "Use a comma-separated string"
            },
            {
              "key": "B",
              "text": "One row per student–subject pair, with a key"
            },
            {
              "key": "C",
              "text": "Add Subject1, Subject2, Subject3"
            },
            {
              "key": "D",
              "text": "Sort the codes"
            }
          ],
          "answer": "B",
          "explanation": "Separate the repeating values into individual rows.",
          "references": [
            {
              "label": "Week 4 normalization lecture",
              "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf"
            }
          ]
        },
        {
          "type": "scenario",
          "id": "scenario-enrolment",
          "title": "Reference Scenario for Q20–23",
          "content": "ENROLMENT(SID, SubjectID, SName, SubjectDescription, Grade) contains atomic values. Its only candidate key is (SID, SubjectID). Assume SID → SName, SubjectID → SubjectDescription, and (SID, SubjectID) → Grade. Neither key component alone determines Grade."
        },
        {
          "id": "q20",
          "question": "What does SubjectID → SubjectDescription mean?",
          "options": [
            {
              "key": "A",
              "text": "Description uniquely identifies ID"
            },
            {
              "key": "B",
              "text": "Description varies by student"
            },
            {
              "key": "C",
              "text": "Descriptions must be sorted"
            },
            {
              "key": "D",
              "text": "Same ID implies same description"
            }
          ],
          "answer": "D",
          "explanation": "The dependency runs from ID to description, not necessarily the reverse.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            },
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        },
        {
          "id": "q21",
          "question": "Which is a full dependency on the composite key?",
          "options": [
            {
              "key": "A",
              "text": "SID → SName"
            },
            {
              "key": "B",
              "text": "SubjectID → SubjectDescription"
            },
            {
              "key": "C",
              "text": "(SID, SubjectID) → Grade"
            },
            {
              "key": "D",
              "text": "(SID, SubjectID) → SName"
            }
          ],
          "answer": "C",
          "explanation": "Grade requires the whole key; SName needs only SID.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            },
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        },
        {
          "id": "q22",
          "question": "What is ENROLMENT’s highest normal form?",
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
          "explanation": "Values are atomic, but partial dependencies prevent 2NF.",
          "references": [
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        },
        {
          "id": "q23",
          "question": "Which decomposition preserves the details and removes the partial dependencies?",
          "options": [
            {
              "key": "A",
              "text": "STUDENT with Grade; SUBJECT"
            },
            {
              "key": "B",
              "text": "STUDENT and SUBJECT with their own descriptions; ENROLMENT with both IDs and Grade"
            },
            {
              "key": "C",
              "text": "STUDENT; SUBJECT with Grade"
            },
            {
              "key": "D",
              "text": "ENROLMENT with IDs and Grade only"
            }
          ],
          "answer": "B",
          "explanation": "Store facts with their determinants and preserve Grade at the pair level.",
          "references": [
            {
              "label": "Anomalies practical, p. 2",
              "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
              "page": 2
            },
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        },
        {
          "id": "q24",
          "question": "EMPLOYEE has only candidate key EmpID. EmpID → DeptID and DeptID → DeptName. What prevents 3NF?",
          "options": [
            {
              "key": "A",
              "text": "Atomic value"
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
          "explanation": "EmpID determines DeptName indirectly via DeptID.",
          "references": [
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        },
        {
          "id": "q25",
          "question": "Which design fixes Q24 while retaining the department link?",
          "options": [
            {
              "key": "A",
              "text": "EMPLOYEE(EmpID, EmpName, DeptID) and DEPARTMENT(DeptID, DeptName)"
            },
            {
              "key": "B",
              "text": "EMPLOYEE(EmpID, EmpName, DeptName) only"
            },
            {
              "key": "C",
              "text": "Remove DeptID from EMPLOYEE and keep DEPARTMENT separately"
            },
            {
              "key": "D",
              "text": "Keep the original and make DeptName unique"
            }
          ],
          "answer": "A",
          "explanation": "DeptID links to a single stored department name.",
          "references": [
            {
              "label": "Week 5 normalization lecture",
              "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
            }
          ]
        }
      ],
      "references": [
        {
          "label": "Week 4 normalization lecture",
          "file": "reference/Oracle APEX/Week 4 - Normalization of Database Table 21 Oct 26.pdf"
        },
        {
          "label": "Week 5 normalization lecture",
          "file": "reference/Oracle APEX/Week 5 - Normalization of Database Table  28 Oct 26.pdf"
        },
        {
          "label": "Anomalies practical, p. 2",
          "file": "reference/Oracle APEX/W2 Practical Anomalies Sep26.pdf",
          "page": 2
        }
      ]
    },
    {
      "id": "sec-4",
      "code": "4",
      "title": "4. Oracle SQL filtering, joins and keys",
      "description": "Data filtering (IS NULL, BETWEEN, LIKE), table aliases, INNER / LEFT / RIGHT / FULL OUTER JOIN row analysis, and composite key matching.",
      "items": [
        {
          "type": "scenario",
          "id": "scenario-sport",
          "title": "Reference Scenario for Q26–35",
          "content": "SPORT(sportNO PK, sportNAME) has 1 swimming, 2 badminton, 3 esport, 4 spelunking, 5 pool, 6 fencing. STUDENT_SPORTENROLL(SID PK, SNAME, sportNO nullable FK) has two students in sport 1, three in sport 2 (Zack, Arthur, Hisham), three in sport 3 (including SID 23), and two with NULL (Matthew, Hafizah). SID 99 is unused. Assume joins use se.sportNO = sp.sportNO unless asked otherwise."
        },
        {
          "id": "q26",
          "question": "Which condition finds students without a sport?",
          "options": [
            {
              "key": "A",
              "text": "sportNO = NULL"
            },
            {
              "key": "B",
              "text": "sportNO &lt;&gt; NULL"
            },
            {
              "key": "C",
              "text": "sportNO IS NULL"
            },
            {
              "key": "D",
              "text": "sportNO = 0"
            }
          ],
          "answer": "C",
          "explanation": "NULL is tested with IS NULL, not equality.",
          "references": [
            {
              "label": "Week 7 SQL lecture",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf"
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q27",
          "question": "Which students satisfy sportNO BETWEEN 2 AND 3?",
          "options": [
            {
              "key": "A",
              "text": "Only badminton"
            },
            {
              "key": "B",
              "text": "All six in badminton and esport"
            },
            {
              "key": "C",
              "text": "Neither endpoint"
            },
            {
              "key": "D",
              "text": "The six plus the two unassigned students"
            }
          ],
          "answer": "B",
          "explanation": "BETWEEN includes both endpoints but does not match NULL.",
          "references": [
            {
              "label": "Week 7 SQL lecture",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf"
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q28",
          "question": "Which condition finds sport names starting with lowercase s?",
          "options": [
            {
              "key": "A",
              "text": "LIKE &#x27;%s&#x27;"
            },
            {
              "key": "B",
              "text": "= &#x27;s%&#x27;"
            },
            {
              "key": "C",
              "text": "LIKE &#x27;s_&#x27;"
            },
            {
              "key": "D",
              "text": "LIKE &#x27;s%&#x27;"
            }
          ],
          "answer": "D",
          "explanation": "Percent matches zero or more characters; underscore matches one.",
          "references": [
            {
              "label": "Week 7 SQL lecture",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf"
            }
          ]
        },
        {
          "id": "q29",
          "question": "Which ON condition correctly links student alias se to sport alias sp?",
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
          "explanation": "Match the student's FK to the sport PK.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q30",
          "question": "How many rows does INNER JOIN return?",
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
          "explanation": "Eight students have matching sports.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q31",
          "question": "What does a LEFT JOIN with students on the left return?",
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
          "explanation": "The left side is preserved, including unmatched students.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q32",
          "question": "With students on the left, which keeps all sports but not unassigned students?",
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
          "explanation": "The right side is preserved, including unused sports.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q33",
          "question": "How many rows does FULL OUTER JOIN return?",
          "options": [
            {
              "key": "A",
              "text": "8"
            },
            {
              "key": "B",
              "text": "10"
            },
            {
              "key": "C",
              "text": "11"
            },
            {
              "key": "D",
              "text": "13"
            }
          ],
          "answer": "D",
          "explanation": "Eight matches, two student-only rows and three sport-only rows.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q34",
          "question": "After a student-to-sport LEFT JOIN, what survives WHERE sp.sportNAME = &#x27;badminton&#x27;?",
          "options": [
            {
              "key": "A",
              "text": "All ten students"
            },
            {
              "key": "B",
              "text": "Eight students"
            },
            {
              "key": "C",
              "text": "Zack, Arthur and Hisham only"
            },
            {
              "key": "D",
              "text": "Those three plus the two unassigned students"
            }
          ],
          "answer": "C",
          "explanation": "The WHERE predicate rejects NULL sport names and other sports.",
          "references": [
            {
              "label": "Week 7 joins, pp. 7–12",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 7
            },
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q35",
          "question": "Which new (SID, sportNO) can be inserted?",
          "options": [
            {
              "key": "A",
              "text": "99, 4"
            },
            {
              "key": "B",
              "text": "99, 99"
            },
            {
              "key": "C",
              "text": "23, 2"
            },
            {
              "key": "D",
              "text": "NULL, 2"
            }
          ],
          "answer": "A",
          "explanation": "Sport 4 exists and SID 99 is unused. The other options break FK or PK rules.",
          "references": [
            {
              "label": "Week7_example.sql",
              "file": "reference/Oracle APEX/Week7_example.sql"
            }
          ]
        },
        {
          "id": "q36",
          "question": "Horse.sql: Which condition and join keep every ENTRY1 row while looking up its prize in PRIZE, keyed by (event_id, place)?",
          "options": [
            {
              "key": "A",
              "text": "INNER JOIN on both columns"
            },
            {
              "key": "B",
              "text": "LEFT JOIN on both columns"
            },
            {
              "key": "C",
              "text": "LEFT JOIN on event_id only"
            },
            {
              "key": "D",
              "text": "LEFT JOIN on place only"
            }
          ],
          "answer": "B",
          "explanation": "Both columns identify the prize, and unmatched entries must be preserved.",
          "references": [
            {
              "label": "Horse.sql",
              "file": "reference/Oracle APEX/Horse.sql"
            },
            {
              "label": "Week 7 LEFT JOIN, p. 10",
              "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf",
              "page": 10
            }
          ]
        }
      ],
      "references": [
        {
          "label": "Week 7 SQL lecture",
          "file": "reference/Oracle APEX/Week 7 - SQL Joins and Data Filtering 11Nov26.pdf"
        },
        {
          "label": "Week7_example.sql",
          "file": "reference/Oracle APEX/Week7_example.sql"
        },
        {
          "label": "Horse.sql",
          "file": "reference/Oracle APEX/Horse.sql"
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
        "Below your diagram, state the two active-loan limits. Explain whether ordinary foreign keys alone enforce them."
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
        "activeLoanLimits": "A member may have at most three active loans; a copy may have at most one active loan. A NULL ReturnDate identifies an active loan here. These limits apply to active loans, not to lifetime history. Ordinary foreign keys check references, not active-loan counts.",
        "references": "Course references: Weeks 2–5 lectures and practicals; Week 7 SQL Joins and Data Filtering, p. 1 and pp. 7–12; Week7_example.sql; Horse.sql."
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
