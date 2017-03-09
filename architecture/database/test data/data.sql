
INSERT INTO friend(
            user_1, user_2)
    VALUES  (1,2),
			(2,3),
			(3,2),			
			(1,5),
			(5,2),
			(5,3), 
			(4,11),
			(4,8),
			(12,1),
			(1,2),
			(12,2)
			;
			
INSERT INTO genders( 
			id, gender)
    VALUES  (0, 'not selected'),
			(1, 'male'),
			(2, 'female')
			;
			
INSERT INTO roles(
            id, name)
    VALUES  (0, 'admin'),
			(1, 'moderator'),
			(2, 'user'),
			(3, 'banned')
			;			
			

INSERT INTO user(
             first_name, last_name, birthday, city_id, password, email, 
            gender,  id_role)
    VALUES  ('Veronika', 'Ivanova','24.10.1995',37356, 'qwerty', 'nika@nika.nika' ,2, 0),
			('Irina', 'Dmitrievtseva', '07.07.1996',37356, 'qwerty', 'ira@ira.ira' ,2, 0),
			('Dmitry','Lemke', '23.03.1990', 27356,'qwerty', 'dmi@try.lem',1, 0),
			('Sam', 'Carter', '12.10.1987', 42219, 'qwerty', 'sam@cart.er',1, 3),
			('Alexandra', 'Timofeeva', '19.08.1995', 36718, 'qwerty', 'alex@ndra.lem',2, 3),
			('Ivan', 'Seleznev', '11.11.1989',36718, 'qwerty', 'ivan@ndra.lem',1, 3),
			('Natalia', 'Kovalenko', '25.09.1995',37356, 'qwerty', 'nat@lia.kov',2, 3),
			('Salim', 'Bengezal', '31.10.1994', 37356,  'qwerty', 'salim@ben.kov',1, 3),   
			('Oliver', 'Sykes', '20.11.1986', 42219, 'qwerty', 'oly@ct.er',1, 3),
			('Lilia', 'Sheby', '11.06.1994', 19089, 'qwerty', 'lili@mail.mail',2,3),
			('Mike', 'Holes', '21.03.1982', 19019, 'qwerty', 'mikehol@mail.mail',1,3), 
			('Yura', 'Ivanov', '08.06.1969', 36254, 'qwerty', 'yoivae@mail.mail',1,3),
			('Ann', 'Shagul', '09.06.1996', 36254, 'qwerty', 'annsh@mail.mail',2,3)
			;
			
INSERT INTO travels(
             name, start_date, end_date,  is_active)
    VALUES  ('Concert', '03.02.2017','05.02.2017', false),  
			('WinterTrip','02.02.2014','15.02.2014', false),
			('SomeTrip', '20.01.2017', '30.01.2017', false),
			('SeaTrip', '20.06.2017', '01.07.2017', true),
			('BestTrip', '20.01.2017', '30.01.2017', false),
			('SunnyTrip', '20.05.2017', '31.07.2017', true),
			('SummerTrip', '20.06.2017', '01.07.2017', true),
			('JustATrip', '20.10.2017', '30.10.2017', true)
    ;			
		

INSERT INTO plans(
             name, travel_id, start_date, end_date, city_id, is_active)
    VALUES  ('Vrn', 1, '2017-02-03', '2017-02-03', 37356, false),
			('Msc', 1, '2017-02-03', '2017-02-05', 36718, false),
			('Vrn', 1, '2017-02-05', '2017-02-05', 37356, false),
			
			('Vrn', 2, '2014-02-02', '2014-02-02', 37356, false),
			('Vrn', 2, '2014-02-02', '2014-02-02', 37356, false),
			('Plane', 2, '2014-02-02', '2014-02-03', 36718, false),
			('Walk', 2, '2014-02-03', '2014-02-03', 20399, false),
			('Visit a Great Place', 2, '2014-02-06', '2014-02-09', 20398, false),
			('Plane', 2, '2014-02-14', '2014-02-15',20398, false),
			('Vrn', 2, '2014-02-14', '2014-02-15', 37356, false),

			('Vrn', 3, '2017-02-20', '2014-02-20', 37356, false),
			('Plane', 3, '2017-02-20', '2014-02-21', 36718, false),
			('Visit  Interesting', 3, '2017-02-25', '2017-02-26', 14348, false),
			('Plane', 3, '2014-02-14', '2014-02-18',14348, false),
			('Vrn', 3, '2014-02-14', '2014-02-15', 37356, false),

			('Start', 4, '2017-06-20', '2017-06-20', 37356, true),
			('Place1', 4, '2017-06-25', '2017-06-26', 23428, true),
			('Place2', 4, '2017-06-28', '2017-06-29', 23440, true),
			('Place3', 4, '2017-06-29', '2017-06-30',14348, true),
			('End', 4, '2017-07-01', '2017-07-01', 37356, true),

			('Start', 5, '2017-01-20', '2017-01-20', 15632, false),
			('Place1', 5, '2017-01-23', '2017-01-26', 23428, false),
			('Place2', 5, '2017-01-28', '2017-01-29', 23440, false),
			('End', 5, '2017-01-30', '2017-01-30', 15632, false),


			('Start', 6, '2017-05-20', '2017-05-20', 37356, true),
			('Place1', 6, '2017-05-25', '2017-06-16', 2348, true),
			('Place2', 6, '2017-06-18', '2017-06-29', 23440, true),
			('End', 6, '2017-07-31', '2017-07-31', 37356, true),


			('Start', 7, '2017-06-20', '2017-06-20', 13422, true),
			('Place1', 7, '2017-06-25', '2017-06-26', 23428, true),
			('Place3', 7, '2017-06-29', '2017-06-30',14348, true),
			('End', 7, '2017-07-01', '2017-07-01', 13422, true),



			('Start', 8, '2017-10-20', '2017-10-20', 37356, true),
			('Place1', 7, '2017-10-24', '2017-10-28', 36254, true),
			('Place3', 7, '2017-10-29', '2017-10-30',36267, true),
			('End', 7, '2017-10-30', '2017-10-30', 37356, true)

	;		
	
	INSERT INTO user_to_travel(
            user_id, travel_id, role_id)
    VALUES  (1, 1, 0),
			(3, 1, 3),
			(1, 2, 0),
			(2, 2, 3),
			(2, 2, 3),
			(4, 3, 0),
			(11, 3, 3),
			(4, 4, 3),
			(8, 4, 0),   
			(1, 5, 0),
			(3, 5, 0),
			(1, 6, 0),
			(2, 6, 0),
			(5, 6, 0),
			(12, 7, 0),
			(1, 7, 3),
			(1, 8, 3),
			(12, 7, 0),
			(13, 7, 0)
	;

	
	
	