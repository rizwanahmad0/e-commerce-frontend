

//   create table tbl_master_country(
//     country_id SERIAL primary key,
//     country_name varchar(100) unique
//   );

//   insert into  tbl_master_country(country_name)
// values
//   ('India'),
//   ('Australia'),
//   ('New Zealand');



//     create table tbl_cricketer(
//     cricketer_id serial primary key,
//     cricketer_name varchar(255),
//     is_batsman boolean,
//     country_id integer references tbl_master_country(country_id)
//   );


//     insert into tbl_cricketer(cricketer_name, is_batsman, country_id)
// values
//   ('Virat Kohli', true, 1),
//   ('Jasprit Bumrah', false, 1),
//   ('Rinku Singh', false, 1),
//   ('MS Dhon', true, 1),
//   ('Mohammed Siraj', false, 1),
//   ('Sachin Tendulkar', true, 1),
//   ('Rahul Dravid', true, 1),
//   ('Sourav Ganguly', true, 1);

//   insert into tbl_cricketer(cricketer_name, is_batsman, country_id)
// values
//   ('Marnus Labuschagne', true, 2),
//   ('Travis Head', false, 2),
//   ('Cameron Green', false, 2),
//   ('Mitchell Marsh', true, 2),
//   ('Josh Hazlewood', false, 2),
//   ('Josh Inglis', true, 2),
//   ('Aaron Hardie', true, 2),
//   ('Ashton Agar', true, 2),
//   ('Devon Conway', true, 3),
//   ('Kane Williamson', false, 3),
//   ('Trent Boult', false, 3),
//   ('Glenn Phillips', true, 3),
//   ('Lockie Ferguson', false, 3),
//   ('Mitchell Santner', true, 3),
//   ('Ish Sodhi', true, 3),
//   ('Mark Chapman', true, 3);


//     insert into tbl_cricketer(cricketer_name, is_batsman, country_id)
// values
//   ('Devon Conway', true, 3),
//   ('Kane Williamson', false, 3),
//   ('Trent Boult', false, 3),
//   ('Glenn Phillips', true, 3),
//   ('Lockie Ferguson', false, 3),
//   ('Mitchell Santner', true, 3),
//   ('Ish Sodhi', true, 3),
//   ('Mark Chapman', true, 3);


//     create table tbl_batting_record(
//     record_id serial primary key,
//     cricketer_id integer references tbl_cricketer(cricketer_id),
//     record_year integer not null check(record_year > 1970),
//     total_test_matches integer,
//     total_run integer,
//     total_100 integer,
//     total_50 integer,
//     total_duck integer,
//     best_score integer
//   );


//   insert into tbl_batting_record(cricketer_id, record_year, total_test_matches, total_run, total_100, total_50, total_duck, best_score)
// values
//   (1, 2017, 10, 700, 5, 2, 0, 125),
//   (1, 2018, 8, 500, 2, 3, 2, 105),
//   (1, 2024, 15, 1000, 7, 5, 4, 150),
//   (2, 2015, 10, 200, 0, 0, 0, 50),
//   (2, 2016, 6, 300, 0, 0, 3, 60),
//   (2, 2020, 7, 250, 0, 0, 4, 40),
//   (3, 2022, 11, 800, 4, 2, 0, 120),
//   (3, 2023, 5, 900, 2, 3, 2, 150),
//   (3, 2024, 7, 974, 0, 5, 1, 90),
//   (4, 2017, 10, 789, 4, 2, 0, 173),
//   (4, 2018, 8, 573, 2, 3, 2, 103),
//   (4, 2024, 13, 783, 3, 5, 4, 109),
//   (5, 2014, 8, 300, 0, 1, 0, 75),
//   (5, 2013, 7, 255, 0, 2, 2, 50),
//   (5, 2029, 6, 199, 0, 0, 2, 60),
//   (6, 2020, 4, 200, 0, 0, 0, 23),
//   (6, 2023, 5, 300, 0, 1, 0, 55),
//   (6, 2024, 8, 500, 1, 2, 0, 125),
//   (7, 2012, 8, 500, 2, 3, 2, 105),
//   (7, 2013, 11, 700, 7, 5, 4, 150),
//   (7, 2014, 9, 500, 5, 2, 0, 125),
//   (8, 2009, 11, 700, 5, 3, 0, 122),
//   (8, 2010, 13, 1200, 6, 4, 2, 102),
//   (8, 2011, 16, 1500, 7, 5, 4, 158);



// (9, 2017, 12, 793, 2, 2, 0, 125),
//   (9, 2018, 8, 100, 2, 3, 2, 105),
//   (9, 2024, 12, 1000, 7, 5, 4, 150),
//   (10, 2016, 6, 302, 0, 0, 3, 60),
//   (10, 2020, 2, 222, 3, 1, 3, 40),
//   (10, 2015, 11, 220, 0, 3, 0, 50),
//   (11, 2022, 12, 803, 3, 3, 0, 120),
//   (11, 2023, 5, 903, 2, 3, 2, 150),
//   (11, 2024, 7, 973, 0, 5, 1, 90),
//   (12, 2017, 10, 784, 4, 2, 0, 173),
//   (12, 2018, 8, 574, 2, 3, 2, 103),
//   (12, 2024, 13, 783, 3, 5, 4, 109),
//   (13, 2014, 8, 304, 0, 1, 0, 75),
//   (13, 2013, 7, 254, 0, 2, 2, 50),
//   (13, 2029, 6, 194, 0, 0, 2, 60),
//   (14, 2020, 4, 204, 2, 0, 8, 23),
//   (14, 2023, 5, 309, 0, 1, 0, 55),
//   (14, 2024, 8, 504, 1, 2, 4, 125),
//   (15, 2012, 8, 504, 2, 3, 2, 105),
//   (15, 2013, 11, 703, 7, 5, 4, 150),
//   (15, 2014, 9, 502, 5, 2, 0, 125),
//   (16, 2009, 11, 740, 5, 3, 0, 122),
//   (16, 2010, 13, 1240, 6, 4, 2, 102),
//   (16, 2011, 16, 1300, 7, 5, 4, 158);
// (17, 2017, 10, 740, 5, 2, 0, 125),
//   (17, 2018, 8, 504, 2, 3, 2, 105),
//   (17, 2024, 15, 1300, 7, 5, 4, 150),
//   (18, 2016, 6, 340, 0, 0, 3, 60),
//   (18, 2020, 7, 240, 0, 0, 3, 40),
//   (18, 2015, 10, 240, 4, 4, 8, 50),
//   (19, 2022, 11, 890, 4, 2, 0, 120),
//   (19, 2023, 5, 909, 2, 3, 4, 150),
//   (19, 2024, 7, 978, 0, 5, 1, 90),
//   (20, 2017, 10, 749, 4, 2, 0, 173),
//   (20, 2018, 8, 533, 2, 3, 2, 103),
//   (20, 2024, 13, 383, 9, 3, 3, 109),
//   (21, 2014, 8, 340, 0, 1, 0, 75),
//   (21, 2013, 7, 253, 0, 2, 2, 50),
//   (21, 2029, 6, 139, 0, 0, 2, 60),
//   (22, 2020, 4, 230, 3, 3, 4, 23),
//   (22, 2023, 5, 300, 0, 1, 0, 55),
//   (22, 2024, 8, 900, 2, 3, 0, 125),
//   (23, 2012, 8, 540, 2, 6, 3, 105),
//   (23, 2013, 11, 200, 7, 5, 4, 150),
//   (23, 2014, 9, 540, 3, 2, 4, 125),
//   (24, 2009, 11, 790, 2, 4, 4, 122),
//   (24, 2010, 13, 1400, 2, 4, 2, 102),
//   (24, 2011, 16, 1540, 4, 3, 2, 158);


//   // Find the name of the Cricketer who played the maximum no. of matches last year.

//   WITH matches_ranked AS (
//     SELECT 
//         tc.cricketer_name AS name, 
//         tbr.total_test_matches,
//         RANK() OVER (ORDER BY tbr.total_test_matches DESC) AS rank
//     FROM tbl_cricketer tc
//     INNER JOIN tbl_batting_record tbr ON tbr.cricketer_id = tc.cricketer_id
//     WHERE tbr.record_year = EXTRACT(YEAR FROM CURRENT_DATE) - 1
// )
// SELECT name, total_test_matches
// FROM matches_ranked
// WHERE rank = 1;

//    // Find the Name of the Cricketer and the total_duck who has scored a maximum number of ducks.

//    with max_duck as (select c.cricketer_name as name, sum(btr.total_duck) as total_duck
//      from tbl_cricketer as c
//       inner join tbl_batting_record as btr on c.cricketer_id = btr.cricketer_id
//       where btr.total_duck > 0
//       group by c.cricketer_name 
//       order by total_duck desc
//       limit 1
//       )
//       select  tc.cricketer_name as name, sum(btr.total_duck) as total_duck
//       from tbl_cricketer tc 
//       inner join tbl_batting_record as btr on btr.cricketer_id = tc.cricketer_id 
//       group by tc.cricketer_name
//       having sum(btr.total_duck)= (select total_duck from max_duck);

// //Find the Name of the Country from which the maximum number of 100 is scored in the current year.


// WITH CenturyCounts AS ( SELECT  c.country_name, SUM(r.total_100) AS total_centuries
//   FROM  tbl_master_country c
//   JOIN  tbl_cricketer cr ON c.country_id = cr.country_id
//   JOIN  tbl_batting_record r ON cr.cricketer_id = r.cricketer_id
//   WHERE   r.record_year = EXTRACT(YEAR FROM CURRENT_DATE)
//   GROUP BY  c.country_name
// )
// SELECT country_name
// FROM CenturyCounts
// WHERE total_centuries = (
//       SELECT MAX(total_centuries) FROM CenturyCounts
//   );



// // Find out the Best scorer Cricketer and his best score in each Country 


// with best_score as (select cr.country_id ,cr.cricketer_id ,max(btr.total_run) as best_score
// from tbl_batting_record as btr
// inner join tbl_cricketer cr on cr.cricketer_id = btr.cricketer_id 
// group by cr.country_id , cr.cricketer_id
// )
// select country.country_name ,cr.cricketer_name , bs.best_score
// from best_score as bs
// inner join tbl_cricketer as cr on cr.cricketer_id = bs.cricketer_id
// inner join tbl_master_country as country on country.country_id = bs.country_id
// ;


// // Find out the non-batsman cricketer who scored a maximum no. of the 50s.


//   WITH max_count_50s AS ( 
//     SELECT  c.country_name, SUM(r.total_50) AS total_fifties
//     FROM tbl_master_country c
//     JOIN tbl_cricketer cr ON c.country_id = cr.country_id
//     JOIN tbl_batting_record r ON cr.cricketer_id = r.cricketer_id
//     WHERE cr.is_batsman = false 
//     GROUP BY c.country_name
//     ORDER By total_fifties DESC
//     LIMIT 1
//   )
//   SELECT c.country_name
//   FROM  tbl_master_country c
//   JOIN tbl_cricketer cr ON c.country_id = cr.country_id
//   JOIN tbl_batting_record r ON cr.cricketer_id = r.cricketer_id
//   WHERE cr.is_batsman = false 
//   GROUP BY c.country_name
//   HAVING SUM(r.total_50) = (SELECT total_fifties FROM max_count_50s);

// // Find out the total number of batsmen in each country. The output will be Country Name and Total No. of Batsman

// select country.country_name as country_name, count(cr.cricketer_id) as batsman
// FROM  tbl_master_country as country
// JOIN tbl_cricketer as cr ON country.country_id = cr.country_id
// GROUP BY country.country_name;

// // Find out the Cricketers whose total run in last year is less than the average runs of that cricketer.

// select cr.cricketer_name
// from tbl_cricketer as cr 
// inner join tbl_batting_record as btr on btr.cricketer_id = cr.cricketer_id
// where btr.record_year = EXTRACT(YEAR FROM CURRENT_DATE)-1 and btr.total_run < 
// (select avg(tbl.total_run) from tbl_batting_record as tbl);


// // Find out Cricketers who have scored less no. of 100s in the current year than the previous year.

// select cr.cricketer_name as cricketer , btr.record_year,btr.total_100
// from tbl_cricketer as cr
// inner join tbl_batting_record as btr on cr.cricketer_id = btr.cricketer_id 
// where (btr.record_year = EXTRACT(YEAR FROM CURRENT_DATE) or btr.record_year = EXTRACT(YEAR FROM CURRENT_DATE)-1 )
// and btr.total_100 > 0
// order by  btr.record_year desc, btr.total_100 asc
// ;


// // Find out in each country the difference between the total runs of batsmen and non-batsmen. The output will be Country Name and Difference in Total Runs.

//   select country.country_name , sum(case when cr.is_batsman = true then btr.total_run else 0 end) 
//   - sum(case when cr.is_batsman != true then btr.total_run else 0 end ) as difference
//   from tbl_master_country as country
//   inner join tbl_cricketer as cr on country.country_id = cr.country_id
//   inner join tbl_batting_record as btr on cr.cricketer_id = btr.cricketer_id
//   group by country.country_name ;

// // Find out the name of the Cricketer whose name starts “A” but doesn’t end with “K”.
 
// select cr.cricketer_name as cricketer
// from tbl_cricketer as cr
// where cr.cricketer_name like 'A%' and cr.cricketer_name not like '%K' ;














