/**
 * SEG1201 Quiz Data
 * This file allows index.html to load data immediately even when opened directly as a local file (file://).
 * You can also edit quiz_data.json or load any custom JSON quiz file using the "Load JSON" button in the app.
 */
window.DEFAULT_QUIZ_DATA = {
  "quizId": "seg1201-quiz-01",
  "title": "Quiz-01",
  "course": "Database Systems",
  "description": "Choose one answer. Your first choice is scored immediately with instant red/green visual feedback, the correct answer revealed, and an in-depth rationale.",
  "sections": [
    {
      "id": "sec-1",
      "code": "1",
      "title": "1. Relational database model",
      "description": "Tuples, relation properties, degree and cardinality, business rules, and fundamental relational algebra operators.",
      "items": [
        {
          "id": "q1",
          "num": 1,
          "question": "What is a tuple?",
          "options": [
            {
              "key": "A",
              "text": "A column"
            },
            {
              "key": "B",
              "text": "A row"
            },
            {
              "key": "C",
              "text": "A domain"
            },
            {
              "key": "D",
              "text": "A table"
            }
          ],
          "answer": "B",
          "explanation": "A tuple contains one record's attribute values.",
          "explanationImage": "img/relational-model-tuple.svg",
          "explanationImageAlt": "A STUDENT relation with one highlighted row labelled Tuple: one record's attribute values."
        },
        {
          "id": "q2",
          "num": 2,
          "question": "A relation has 12 rows and 4 columns. What are its degree and cardinality?",
          "options": [
            {
              "key": "A",
              "text": "12, 4"
            },
            {
              "key": "B",
              "text": "12, 12"
            },
            {
              "key": "C",
              "text": "4, 4"
            },
            {
              "key": "D",
              "text": "4, 12"
            }
          ],
          "answer": "D",
          "explanation": "Degree counts attributes; cardinality counts tuples."
        },
        {
          "id": "q3",
          "num": 3,
          "question": "Which is a business rule?",
          "options": [
            {
              "key": "A",
              "text": "Each order belongs to one user"
            },
            {
              "key": "B",
              "text": "Use a dark editor"
            },
            {
              "key": "C",
              "text": "Use larger text"
            },
            {
              "key": "D",
              "text": "Capitalize keywords"
            }
          ],
          "answer": "A",
          "explanation": "The rule constrains valid associations in the data."
        },
        {
          "id": "q4",
          "num": 4,
          "question": "Which relational algebra operator filters rows?",
          "options": [
            {
              "key": "A",
              "text": "PROJECT"
            },
            {
              "key": "B",
              "text": "PRODUCT"
            },
            {
              "key": "C",
              "text": "SELECT"
            },
            {
              "key": "D",
              "text": "UNION"
            }
          ],
          "answer": "C",
          "explanation": "Relational SELECT filters rows; SQL uses WHERE for this."
        },
        {
          "id": "q5",
          "num": 5,
          "question": "Which operator extracts only SID and SName?",
          "options": [
            {
              "key": "A",
              "text": "SELECT"
            },
            {
              "key": "B",
              "text": "PROJECT"
            },
            {
              "key": "C",
              "text": "INTERSECT"
            },
            {
              "key": "D",
              "text": "DIFFERENCE"
            }
          ],
          "answer": "B",
          "explanation": "Projection selects attributes."
        },
        {
          "id": "q6",
          "num": 6,
          "question": "A contains 100, 200, 300; B contains 200, 400. Which returns 100 and 300?",
          "options": [
            {
              "key": "A",
              "text": "A INTERSECT B"
            },
            {
              "key": "B",
              "text": "B DIFFERENCE A"
            },
            {
              "key": "C",
              "text": "A UNION B"
            },
            {
              "key": "D",
              "text": "A DIFFERENCE B"
            }
          ],
          "answer": "D",
          "explanation": "Only 200 is removed from A."
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
          "num": 7,
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
          "explanation": "It has parts, but only one address per employee."
        },
        {
          "id": "q8",
          "num": 8,
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
          "explanation": "It is calculated from other attributes."
        },
        {
          "id": "q9",
          "num": 9,
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
          "explanation": "A candidate key not selected as PK is an alternate key."
        },
        {
          "id": "q10",
          "num": 10,
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
          "explanation": "Read each direction independently."
        },
        {
          "id": "q11",
          "num": 11,
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
          "explanation": "The FK goes on the many side and references the title."
        },
        {
          "id": "q12",
          "num": 12,
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
          "explanation": "Quantity describes an item on a particular order."
        },
        {
          "id": "q13",
          "num": 13,
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
          "explanation": "The combination, not each component, must be unique."
        },
        {
          "id": "q14",
          "num": 14,
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
          "explanation": "NOT NULL requires a value; the FK checks its existence."
        },
        {
          "id": "q15",
          "num": 15,
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
          "explanation": "The circle denotes zero minimum; the fork means many maximum."
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
          "num": 16,
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
          "explanation": "Different rows now disagree about the same fact."
        },
        {
          "id": "q17",
          "num": 17,
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
          "explanation": "An independent fact cannot be added by itself."
        },
        {
          "id": "q18",
          "num": 18,
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
          "explanation": "Deleting one fact unintentionally removes another."
        },
        {
          "id": "q19",
          "num": 19,
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
          "explanation": "Separate the repeating values into individual rows."
        },
        {
          "type": "scenario",
          "id": "scenario-enrolment",
          "title": "Reference Scenario for Q20–23",
          "content": "ENROLMENT(SID, SubjectID, SName, SubjectDescription, Grade) contains atomic values. Its only candidate key is (SID, SubjectID). Assume SID → SName, SubjectID → SubjectDescription, and (SID, SubjectID) → Grade. Neither key component alone determines Grade."
        },
        {
          "id": "q20",
          "num": 20,
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
          "explanation": "The dependency runs from ID to description, not necessarily the reverse."
        },
        {
          "id": "q21",
          "num": 21,
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
          "explanation": "Grade requires the whole key; SName needs only SID."
        },
        {
          "id": "q22",
          "num": 22,
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
          "explanation": "Values are atomic, but partial dependencies prevent 2NF."
        },
        {
          "id": "q23",
          "num": 23,
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
          "explanation": "Store facts with their determinants and preserve Grade at the pair level."
        },
        {
          "id": "q24",
          "num": 24,
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
          "explanation": "EmpID determines DeptName indirectly via DeptID."
        },
        {
          "id": "q25",
          "num": 25,
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
          "explanation": "DeptID links to a single stored department name."
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
          "num": 26,
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
          "explanation": "NULL is tested with IS NULL, not equality."
        },
        {
          "id": "q27",
          "num": 27,
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
          "explanation": "BETWEEN includes both endpoints but does not match NULL."
        },
        {
          "id": "q28",
          "num": 28,
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
          "explanation": "Percent matches zero or more characters; underscore matches one."
        },
        {
          "id": "q29",
          "num": 29,
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
          "explanation": "Match the student's FK to the sport PK."
        },
        {
          "id": "q30",
          "num": 30,
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
          "explanation": "Eight students have matching sports."
        },
        {
          "id": "q31",
          "num": 31,
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
          "explanation": "The left side is preserved, including unmatched students."
        },
        {
          "id": "q32",
          "num": 32,
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
          "explanation": "The right side is preserved, including unused sports."
        },
        {
          "id": "q33",
          "num": 33,
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
          "explanation": "Eight matches, two student-only rows and three sport-only rows."
        },
        {
          "id": "q34",
          "num": 34,
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
          "explanation": "The WHERE predicate rejects NULL sport names and other sports."
        },
        {
          "id": "q35",
          "num": 35,
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
          "explanation": "Sport 4 exists and SID 99 is unused. The other options break FK or PK rules."
        },
        {
          "id": "q36",
          "num": 36,
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
          "explanation": "Both columns identify the prize, and unmatched entries must be preserved."
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
      }
    }
  ]
};
