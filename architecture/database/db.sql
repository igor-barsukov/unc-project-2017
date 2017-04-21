--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE activities (
    id integer NOT NULL,
    travel_id integer NOT NULL,
    name character varying(100) NOT NULL,
    address character varying(1000),
    description character varying(1000),
    price integer,
    ticket character varying(100),
    coordinates point,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone NOT NULL
);


ALTER TABLE activities OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE activities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE activities_id_seq OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activities_id_seq OWNED BY activities.id;


--
-- Name: albums; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE albums (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    create_date date NOT NULL,
    description text,
    travel_id integer NOT NULL
);


ALTER TABLE albums OWNER TO postgres;

--
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE albums_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE albums_id_seq OWNER TO postgres;

--
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE albums_id_seq OWNED BY albums.id;


--
-- Name: chat_travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE chat_travel (
    id integer NOT NULL,
    travel_id integer NOT NULL,
    sender_id integer NOT NULL,
    send_time timestamp without time zone NOT NULL,
    body text NOT NULL
);


ALTER TABLE chat_travel OWNER TO postgres;

--
-- Name: chat_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE chat_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE chat_travel_id_seq OWNER TO postgres;

--
-- Name: chat_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE chat_travel_id_seq OWNED BY chat_travel.id;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cities (
    city_id integer NOT NULL,
    name character varying(50) NOT NULL,
    state_id integer NOT NULL
);


ALTER TABLE cities OWNER TO postgres;

--
-- Name: cities_city_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE cities_city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE cities_city_id_seq OWNER TO postgres;

--
-- Name: cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE cities_city_id_seq OWNED BY cities.city_id;


--
-- Name: comment_photo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE comment_photo (
    id integer NOT NULL,
    photo_id integer NOT NULL,
    commentator_id integer NOT NULL,
    comment text NOT NULL,
    create_time timestamp without time zone NOT NULL
);


ALTER TABLE comment_photo OWNER TO postgres;

--
-- Name: comment_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE comment_photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE comment_photo_id_seq OWNER TO postgres;

--
-- Name: comment_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE comment_photo_id_seq OWNED BY comment_photo.id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE countries (
    country_id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE countries OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE countries_country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE countries_country_id_seq OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE countries_country_id_seq OWNED BY countries.country_id;


--
-- Name: friends; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE friends (
    user_1 integer NOT NULL,
    user_2 integer NOT NULL
);


ALTER TABLE friends OWNER TO postgres;

--
-- Name: genders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE genders (
    id integer NOT NULL,
    gender character varying(20) NOT NULL
);


ALTER TABLE genders OWNER TO postgres;

--
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE genders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE genders_id_seq OWNER TO postgres;

--
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE genders_id_seq OWNED BY genders.id;


--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE messages (
    id integer NOT NULL,
    sender_id integer NOT NULL,
    recipient_id integer NOT NULL,
    send_time timestamp without time zone NOT NULL,
    body text NOT NULL
);


ALTER TABLE messages OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE messages_id_seq OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE messages_id_seq OWNED BY messages.id;


--
-- Name: movement_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE movement_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movement_id_seq OWNER TO postgres;

--
-- Name: movements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE movements (
    id integer NOT NULL,
    transport_id integer NOT NULL,
    travel_id integer NOT NULL,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone NOT NULL,
    start_address character varying,
    destination_address character varying,
    price numeric,
    distance integer,
    description character varying(1000),
    ticket character varying(1000),
    start_coordinates point,
    destination_coordinates point
);


ALTER TABLE movements OWNER TO postgres;

--
-- Name: movements_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE movements_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movements_id_seq OWNER TO postgres;

--
-- Name: movements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE movements_id_seq OWNED BY movements.id;


--
-- Name: movements_transport_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE movements_transport_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE movements_transport_id_seq OWNER TO postgres;

--
-- Name: movements_transport_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE movements_transport_id_seq OWNED BY movements.transport_id;


--
-- Name: photos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE photos (
    id integer NOT NULL,
    album_id integer NOT NULL,
    owner_id integer NOT NULL,
    path_to_photo character varying(100) NOT NULL
);


ALTER TABLE photos OWNER TO postgres;

--
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE photos_id_seq OWNER TO postgres;

--
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- Name: plans_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE plans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE plans_id_seq OWNER TO postgres;

--
-- Name: post_of_travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE post_of_travel (
    id integer NOT NULL,
    owner_id integer NOT NULL,
    travel_id integer NOT NULL,
    body text NOT NULL,
    send_time timestamp without time zone NOT NULL
);


ALTER TABLE post_of_travel OWNER TO postgres;

--
-- Name: post_of_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE post_of_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE post_of_travel_id_seq OWNER TO postgres;

--
-- Name: post_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE post_of_travel_id_seq OWNED BY post_of_travel.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE roles OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE roles_id_seq OWNER TO postgres;

--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE states (
    id integer NOT NULL,
    country_id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE states OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE states_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE states_id_seq OWNER TO postgres;

--
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE states_id_seq OWNED BY states.id;


--
-- Name: transports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transports (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE transports OWNER TO postgres;

--
-- Name: transports_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "transports_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "transports_Id_seq" OWNER TO postgres;

--
-- Name: transports_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "transports_Id_seq" OWNED BY transports.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE travels (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    start_date date NOT NULL,
    end_date date,
    info text,
    is_active boolean NOT NULL
);


ALTER TABLE travels OWNER TO postgres;

--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE travels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE travels_id_seq OWNER TO postgres;

--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE travels_id_seq OWNED BY travels.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    first_name character varying(50) NOT NULL,
    birthday date,
    city_id integer,
    last_name character varying(50),
    password character varying(150) NOT NULL,
    email character varying(100) NOT NULL,
    gender integer NOT NULL,
    info text,
    id_role integer,
    user_photo character varying(100)
);


ALTER TABLE users OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_id_seq OWNED BY users.id;


--
-- Name: user_to_travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE user_to_travel (
    user_id integer NOT NULL,
    travel_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE user_to_travel OWNER TO postgres;

--
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities ALTER COLUMN id SET DEFAULT nextval('activities_id_seq'::regclass);


--
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- Name: chat_travel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel ALTER COLUMN id SET DEFAULT nextval('chat_travel_id_seq'::regclass);


--
-- Name: cities city_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities ALTER COLUMN city_id SET DEFAULT nextval('cities_city_id_seq'::regclass);


--
-- Name: comment_photo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo ALTER COLUMN id SET DEFAULT nextval('comment_photo_id_seq'::regclass);


--
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries ALTER COLUMN country_id SET DEFAULT nextval('countries_country_id_seq'::regclass);


--
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders ALTER COLUMN id SET DEFAULT nextval('genders_id_seq'::regclass);


--
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- Name: movements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements ALTER COLUMN id SET DEFAULT nextval('movements_id_seq'::regclass);


--
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- Name: post_of_travel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel ALTER COLUMN id SET DEFAULT nextval('post_of_travel_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- Name: states id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states ALTER COLUMN id SET DEFAULT nextval('states_id_seq'::regclass);


--
-- Name: transports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports ALTER COLUMN id SET DEFAULT nextval('"transports_Id_seq"'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels ALTER COLUMN id SET DEFAULT nextval('travels_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY activities (id, travel_id, name, address, description, price, ticket, coordinates, start_time, end_time) FROM stdin;
4	1	wqewerr	rrr	\N	\N	\N	(214.31999999999999,23.219999999999999)	2011-02-21 08:00:00+03	2014-02-11 09:00:00+04
1	1	qwrty	qweqweq	\N	\N	\N	(2124.23,12.231)	2013-04-14 08:00:00+04	2013-04-14 08:00:00+04
\.


--
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('activities_id_seq', 4, true);


--
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY albums (id, name, create_date, description, travel_id) FROM stdin;
\.


--
-- Name: albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('albums_id_seq', 1, false);


--
-- Data for Name: chat_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY chat_travel (id, travel_id, sender_id, send_time, body) FROM stdin;
\.


--
-- Name: chat_travel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('chat_travel_id_seq', 1, false);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY cities (city_id, name, state_id) FROM stdin;
\.


--
-- Name: cities_city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('cities_city_id_seq', 1, false);


--
-- Data for Name: comment_photo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY comment_photo (id, photo_id, commentator_id, comment, create_time) FROM stdin;
\.


--
-- Name: comment_photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('comment_photo_id_seq', 1, false);


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY countries (country_id, name) FROM stdin;
\.


--
-- Name: countries_country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('countries_country_id_seq', 1, false);


--
-- Data for Name: friends; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY friends (user_1, user_2) FROM stdin;
\.


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY genders (id, gender) FROM stdin;
\.


--
-- Name: genders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('genders_id_seq', 1, false);


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY messages (id, sender_id, recipient_id, send_time, body) FROM stdin;
\.


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('messages_id_seq', 1, false);


--
-- Name: movement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('movement_id_seq', 1, false);


--
-- Data for Name: movements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY movements (id, transport_id, travel_id, start_time, end_time, start_address, destination_address, price, distance, description, ticket, start_coordinates, destination_coordinates) FROM stdin;
\.


--
-- Name: movements_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('movements_id_seq', 1, true);


--
-- Name: movements_transport_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('movements_transport_id_seq', 1, false);


--
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY photos (id, album_id, owner_id, path_to_photo) FROM stdin;
\.


--
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('photos_id_seq', 1, false);


--
-- Name: plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('plans_id_seq', 1, false);


--
-- Data for Name: post_of_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY post_of_travel (id, owner_id, travel_id, body, send_time) FROM stdin;
\.


--
-- Name: post_of_travel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('post_of_travel_id_seq', 1, false);


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY roles (id, name) FROM stdin;
\.


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('roles_id_seq', 1, false);


--
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY spatial_ref_sys (srid, auth_name, auth_srid, srtext, proj4text) FROM stdin;
\.


--
-- Data for Name: states; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY states (id, country_id, name) FROM stdin;
\.


--
-- Name: states_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('states_id_seq', 1, false);


--
-- Data for Name: transports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY transports (id, name) FROM stdin;
\.


--
-- Name: transports_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"transports_Id_seq"', 1, false);


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY travels (id, name, start_date, end_date, info, is_active) FROM stdin;
1	first_travel	2012-12-21	2016-01-21	ewe	t
2	332	1292-12-12	1300-12-12	\N	f
\.


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('travels_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_id_seq', 1, false);


--
-- Data for Name: user_to_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY user_to_travel (user_id, travel_id, role_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, first_name, birthday, city_id, last_name, password, email, gender, info, id_role, user_photo) FROM stdin;
\.


--
-- Name: users USER_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);


--
-- Name: activities activity_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT activity_id PRIMARY KEY (id);


--
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- Name: chat_travel chat_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_pkey PRIMARY KEY (id);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (city_id);


--
-- Name: comment_photo comment_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_pkey PRIMARY KEY (id);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- Name: friends friends_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_pkey PRIMARY KEY (user_1, user_2);


--
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- Name: transports id_transport; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports
    ADD CONSTRAINT id_transport PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: movements movement_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT movement_id PRIMARY KEY (id);


--
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- Name: post_of_travel post_of_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: user_to_travel user_to_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_pkey PRIMARY KEY (travel_id, user_id);


--
-- Name: CHAT_TRAVEL_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_ID_index" ON chat_travel USING btree (id);


--
-- Name: CHAT_TRAVEL_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SENDER_ID_index" ON chat_travel USING btree (sender_id);


--
-- Name: CHAT_TRAVEL_SEND_TIME_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SEND_TIME_index" ON chat_travel USING btree (send_time);


--
-- Name: MESSAGES_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_ID_index" ON messages USING btree (id);


--
-- Name: MESSAGES_RECIPIENT_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_RECIPIENT_ID_index" ON messages USING btree (recipient_id);


--
-- Name: MESSAGES_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_SENDER_ID_index" ON messages USING btree (sender_id);


--
-- Name: ROLES_NAME_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ROLES_NAME_uindex" ON roles USING btree (name);


--
-- Name: USER_EMAIL_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "USER_EMAIL_uindex" ON users USING btree (email);


--
-- Name: cities_name_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cities_name_index ON cities USING btree (name);


--
-- Name: genders_gender_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX genders_gender_uindex ON genders USING btree (gender);


--
-- Name: albums albums_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: chat_travel chat_travel_travels_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_travels_travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: chat_travel chat_travel_user_sender_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_user_sender_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: cities cities_states_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_states_id_fk FOREIGN KEY (state_id) REFERENCES states(id);


--
-- Name: comment_photo comment_photo_photos_photo_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_photos_photo_id_fk FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- Name: comment_photo comment_photo_user_commentator_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_user_commentator_id_fk FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- Name: user_to_travel fk1dda0hbrammx0axdl8g9mu3o3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT fk1dda0hbrammx0axdl8g9mu3o3 FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: users fk3u4hjc7gsjmdmx1er2jjgxy36; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fk3u4hjc7gsjmdmx1er2jjgxy36 FOREIGN KEY (gender) REFERENCES genders(id);


--
-- Name: friends fk4ronnr8f5mc9l720x5p6mvvwo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fk4ronnr8f5mc9l720x5p6mvvwo FOREIGN KEY (user_2) REFERENCES users(id);


--
-- Name: messages fk4ui4nnwntodh6wjvck53dbk9m; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fk4ui4nnwntodh6wjvck53dbk9m FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: users fk6hdb99npa6fhicw0lggmv85qa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fk6hdb99npa6fhicw0lggmv85qa FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- Name: friends fk6jn0twg3xe3rem4ylxb9o28mq; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fk6jn0twg3xe3rem4ylxb9o28mq FOREIGN KEY (user_1) REFERENCES users(id);


--
-- Name: chat_travel fk7loxbty46dp6wlqdmbh9xucrs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT fk7loxbty46dp6wlqdmbh9xucrs FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: post_of_travel fk8onjmdnn5vr08j24g5ebkv5br; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT fk8onjmdnn5vr08j24g5ebkv5br FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: comment_photo fk8vfwfvw38ccajgvy53epg8r5p; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT fk8vfwfvw38ccajgvy53epg8r5p FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- Name: post_of_travel fk9skv4gdph1e5tnnhsy4wo03te; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT fk9skv4gdph1e5tnnhsy4wo03te FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: chat_travel fka1josrgwks0f1ajh7h3y928yj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT fka1josrgwks0f1ajh7h3y928yj FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: post_of_travel fkayfxs9nsxdli1n8ec27nsn3pi; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT fkayfxs9nsxdli1n8ec27nsn3pi FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: albums fkcr9cmsiwsavga8s94u9vved8t; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT fkcr9cmsiwsavga8s94u9vved8t FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: user_to_travel fkd68a7l8j13ktjex00msqw0bw5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT fkd68a7l8j13ktjex00msqw0bw5 FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- Name: activities fkdwtoj8so4n1f0qu9fh1642enj; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT fkdwtoj8so4n1f0qu9fh1642enj FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: users fke0c8aqvw3liin6gxeysj13x2d; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fke0c8aqvw3liin6gxeysj13x2d FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- Name: users fkfdpp3ihbu0793wagj5qoc8mt3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkfdpp3ihbu0793wagj5qoc8mt3 FOREIGN KEY (gender) REFERENCES genders(id);


--
-- Name: photos fkfh8uqh4o1470d8jgtr2xedsip; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fkfh8uqh4o1470d8jgtr2xedsip FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: friends fkfqb57c4t8opc5pqpfei43vgx0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fkfqb57c4t8opc5pqpfei43vgx0 FOREIGN KEY (user_2) REFERENCES users(id);


--
-- Name: comment_photo fkg5g4axfsukk4ljdoarq0q3k87; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT fkg5g4axfsukk4ljdoarq0q3k87 FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- Name: messages fkhdkwfnspwb3s60j27vpg0rpg6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fkhdkwfnspwb3s60j27vpg0rpg6 FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- Name: friends fkheg39l1qq9ceigdl7kqslegdx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fkheg39l1qq9ceigdl7kqslegdx FOREIGN KEY (user_1) REFERENCES users(id);


--
-- Name: messages fkhky628e8v09g8h9qg27jab05v; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fkhky628e8v09g8h9qg27jab05v FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- Name: messages fkip9clvpi646rirksmm433wykx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fkip9clvpi646rirksmm433wykx FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: photos fkj1doul54w2bmg5rssxbto56n5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fkj1doul54w2bmg5rssxbto56n5 FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: activities fkj8iiuiddvud69vytbqg6tcvs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT fkj8iiuiddvud69vytbqg6tcvs FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: movements fkkqq15a8iiyuy88l7t3xpu7t2b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT fkkqq15a8iiyuy88l7t3xpu7t2b FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: comment_photo fkls6unskpbad2rylkwdyj0p2w0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT fkls6unskpbad2rylkwdyj0p2w0 FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- Name: users fkn36jwt4acj3il2ixvv2c0ncco; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkn36jwt4acj3il2ixvv2c0ncco FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- Name: user_to_travel fknff2irni6nrdnq6j9xy3gri73; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT fknff2irni6nrdnq6j9xy3gri73 FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: movements fkngj9op1ddi7ppk2i4ww3lu8b4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT fkngj9op1ddi7ppk2i4ww3lu8b4 FOREIGN KEY (transport_id) REFERENCES transports(id);


--
-- Name: photos fkoamp0ftyyl46e15v3inuu6ke5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fkoamp0ftyyl46e15v3inuu6ke5 FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- Name: user_to_travel fks1q433vij35yaodyaof8egt0b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT fks1q433vij35yaodyaof8egt0b FOREIGN KEY (user_id) REFERENCES users(id);


--
-- Name: states fkskkdphjml9vjlrqn4m5hi251y; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT fkskkdphjml9vjlrqn4m5hi251y FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- Name: cities fksu54e1tlhaof4oklvv7uphsli; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT fksu54e1tlhaof4oklvv7uphsli FOREIGN KEY (state_id) REFERENCES states(id);


--
-- Name: users fkt92dgi4412ywy3u8tm9jwdya5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkt92dgi4412ywy3u8tm9jwdya5 FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- Name: chat_travel fktrvi0j6rp5elx6apdxp6rphl2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT fktrvi0j6rp5elx6apdxp6rphl2 FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: friends friends_user_user_1_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_1_fk FOREIGN KEY (user_1) REFERENCES users(id);


--
-- Name: friends friends_user_user_2_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_2_fk FOREIGN KEY (user_2) REFERENCES users(id);


--
-- Name: messages messages_sender_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_sender_id_user_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- Name: messages messages_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_user_id_fk FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- Name: photos photos_albums_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_albums_id_fk FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- Name: photos photos_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: post_of_travel post_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: post_of_travel post_of_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- Name: states states_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- Name: movements transport_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT transport_id_fk FOREIGN KEY (transport_id) REFERENCES transports(id);


--
-- Name: movements travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: activities travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: users user_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- Name: users user_genders_gender_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_genders_gender_fk FOREIGN KEY (gender) REFERENCES genders(id);


--
-- Name: users user_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_roles_id_fk FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- Name: user_to_travel user_to_travel_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- Name: user_to_travel user_to_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- Name: user_to_travel user_to_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id);


--
-- PostgreSQL database dump complete
--

