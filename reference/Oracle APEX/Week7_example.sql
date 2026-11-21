ALTER SESSION SET NLS_DATE_FORMAT = 'DD-MON-YYYY';

DROP TABLE student_sportenroll CASCADE CONSTRAINTS;
DROP TABLE sport CASCADE CONSTRAINTS;

CREATE TABLE sport (
    sportNO      NUMERIC(3) PRIMARY KEY,
    sportNAME    VARCHAR2(30)
);

CREATE TABLE student_sportenroll (
    SID         NUMERIC(4) PRIMARY KEY,
    SNAME       VARCHAR2(30),
    sportNO      NUMERIC(3),
    FOREIGN KEY (sportNO) REFERENCES sport(sportNO)
);

INSERT INTO sport VALUES (01, 'swimming');
INSERT INTO sport VALUES (02, 'badminton');
INSERT INTO sport VALUES (03, 'esport');
INSERT INTO sport VALUES('04', 'spelunking');
INSERT INTO sport VALUES('05', 'pool');
INSERT INTO sport VALUES('06', 'fencing');

INSERT INTO student_sportenroll VALUES (0023, 'John', 03);
INSERT INTO student_sportenroll VALUES (0064, 'Ali', 03);
INSERT INTO student_sportenroll VALUES (0034, 'Matthew', NULL);
INSERT INTO student_sportenroll VALUES(0087, 'Hafizah', NULL);
INSERT INTO student_sportenroll VALUES(0067, 'Zack', 02);
INSERT INTO student_sportenroll VALUES(0065, 'Arthur', 02);
INSERT INTO student_sportenroll VALUES(0090, 'Hisham', 02);
INSERT INTO student_sportenroll VALUES(0039, 'Nadia', 03);
INSERT INTO student_sportenroll VALUES(0021, 'Prakesh', 01);
INSERT INTO student_sportenroll VALUES(0010, 'Samsul', 01);

SELECT * FROM student_sportenroll;
SELECT * FROM sport;

-- Write a query to return every student who has a sport assigned
-- USE INNER JOIN

--DISPLAYING ALL THE ATTRIBUTES
SELECT *
FROM student_sportenroll stu
INNER JOIN sport s
ON stu.sportNO = s.sportNO;

--  CHOOSE THE ATTRIBUTES THAT RELATED TO THE QUESTION 
SELECT stu.SNAME, s.sportNAME 
FROM student_sportenroll stu
JOIN sport s
ON stu.sportNO = s.sportNO;

-- Write a query to show every student’s ID and their name along with the sportNAME including students who aren’t enrolled in any sport.
-- use LEFT JOIN

--DISPLAYING ALL THE ATTRIBUTES
SELECT *
FROM   student_sportenroll se
LEFT   JOIN sport sp
       ON se.sportNO = sp.sportNO;

--  CHOOSE THE ATTRIBUTES THAT RELATED TO THE QUESTION 
SELECT se.SID    AS STU_ID,
       se.SNAME  AS STU_NAME,
       sp.sportNAME
FROM   student_sportenroll se
LEFT   JOIN sport sp
       ON se.sportNO = sp.sportNO;


-- Write a query to show every sportNAME alongside the name of students enrolled in it—include sports that have no students
--USE RIGHT JOIN

--DISPLAYING ALL THE ATTRIBUTES
SELECT *
FROM   student_sportenroll se
RIGHT JOIN sport sp
       ON se.sportNO = sp.sportNO;

--  CHOOSE THE ATTRIBUTES THAT RELATED TO THE QUESTION 
SELECT sp.sportNAME AS Sports, se.SNAME AS Student_Name
FROM   student_sportenroll se
RIGHT JOIN sport sp
       ON se.sportNO = sp.sportNO;

-- Write a query that lists all students and their sports and all sports and their students 
--USE FULL OUTER JOIN

--DISPLAYING ALL THE ATTRIBUTES
SELECT *
FROM   student_sportenroll se
FULL JOIN sport sp
       ON se.sportNO = sp.sportNO;

--  CHOOSE THE ATTRIBUTES THAT RELATED TO THE QUESTION 
SELECT se.SID    AS Student_ID,
       se.SNAME  AS Student_NAME,
       sp.sportNAME
FROM   student_sportenroll se
FULL JOIN sport sp
       ON se.sportNO = sp.sportNO;
