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
			(12,2)
			;


	INSERT INTO user_to_travels(
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

INSERT INTO part_of_travel(
			travel_id, date, description, is_actice, info)
	VALUES	(4, '2017-04-20', 'plan of day', true, 'info'),
			(2, '2017-04-27', 'plan of day', true, 'info');


INSERT INTO booked_hotel(
			part_of_travel, address, price, check_in_time, check_out_time, hotel_name)
	VALUES	(1, 'ul. Vladimira Nevskogo, 29, Voronezh', 1000, '2017-04-09 15:09:57.72', '2017-04-09 17:10:00.102', 'Benefit Plaza Kongress');


INSERT INTO sight(
			country_id, state_id, city_id, description)
	VALUES	(181, 3073, 37356, 'Annunciation Cathedral of Voronezh'),
			(181, 3073, 37356, 'Model of the ship Mercury Cathedral of Voronezh'),
			(181, 3073, 37356, 'Monument of Glory');

INSERT INTO travel_by_bus(
			part_of_travel, start_place, end_place, start_station,
			end_station, platform, bus_number, distance, price, departure, arrival)
	VALUES	(1, 3, 4, 'Vnukovo', 'Nara', 1, '45A', 245, 150, '2017-04-08 18:22:51.503', '2017-04-09 18:22:53.999');

INSERT INTO travel_by_car(
			part_of_travel, start_address, end_address, company, car_description,
			price, pick_up_time, drop_off_time)
	VALUES	(1, 'Voronezh, Mira 2', 'Moscow, Mira 7', NULL, 'Audi A8', 200, '2017-04-08 18:35:04.244', '2017-04-09 03:35:07.046');

INSERT INTO travel_by_flight(
			part_of_travel, start_place, end_place, start_airport_name, end_airport_name,
			airline, flight_number, destance, price, departure, arrival)
	VALUES	(1, 4, 7, 'Vnukovo', 'Aldan Airport', 'RusLain', 1253, 800, 5000, '2017-04-08 18:24:31.084', '2017-04-10 18:24:33.699');

INSERT INTO travel_by_rail(
			part_of_travel, start_station, end_station, platform, train_number,
			distance, price, start_place, end_place, departure, arrival)
	VALUES	(1, 'Voronezh-1', 'Moscow', 2, '567', 650, 1000, 2, 2, '2017-04-08 18:26:31.31', '2017-04-08 22:26:32.885');

INSERT INTO travel_to_sight(
		part_of_travel, sight_id)
	VALUES	(1, 3),
			(1, 1);
