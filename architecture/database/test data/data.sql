INSERT INTO genders(
			id, gender)
    VALUES  (1, 'male'),
			(2, 'female')
			;

INSERT INTO roles(
            id, name)
    VALUES  (0, 'admin'),
			(1, 'moderator'),
			(2, 'user'),
			(3, 'banned')
			;
			
			
INSERT INTO activity_types(
            name)
    VALUES  ('lodging'),
			('sight');
			
INSERT INTO transports(
            name)
    VALUES  ('car'),
			('bus'),
			('rail'),
			('plane'),
			('water transport'),
			('other')
			;			
			
			

INSERT INTO users(
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
	
	
INSERT INTO movements(
           transport_id, travel_id, start_time, end_time,
           price, distance)
    VALUES  (1, 1, '2017-02-03 08:00:00+03', '2017-02-03 10:00:00+03', 100, 0),
			(1, 1, '2017-02-05 08:00:00+03', '2017-02-05 10:00:00+03', 100, 0),
	        (1, 2, '2014-02-03 08:00:00+03', '2014-02-03 10:00:00+03', 100, 0),
		    (1, 2, '2014-02-10 08:00:00+03', '2014-02-11 10:00:00+03', 100, 0)
	;

INSERT INTO activities(          
		    activity_type_id, travel_id, name,   
            start_time, end_time, price)
    VALUES  (2, 1,'museum', '2017-02-03 15:00:00+03', '2017-02-03 19:00:00+03', 100),
			(2, 1,'walk', '2017-02-05 10:00:00+03', '2017-02-05 15:00:00+03', 100),
	        (2, 2,'walk', '2014-02-04 08:00:00+03', '2014-02-05 10:00:00+03', 100),
		    (2, 2,'theatre', '2014-02-11 19:00:00+03', '2014-02-11 22:00:00+03', 100)
	;	
	
	
INSERT INTO user_to_travels(
            user_id, travel_id, role_id)
    VALUES  (1, 1, 0), 
			(1, 2, 1),
			(2, 3, 0),
			(2, 1, 1),
			(3, 3, 1),
			(3, 1, 2),
			(4, 4, 0),
			(1, 5, 0),
			(4, 6, 0),
			(7, 7, 0),
			(8, 8, 0)
    ;

