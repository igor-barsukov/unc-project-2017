--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

-- Started on 2017-04-09 15:13:19 MSK

SET datestyle = "ISO, DMY";
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12655)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2643 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 187 (class 1259 OID 50545)
-- Name: album; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE album (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    create_date date NOT NULL,
    description text,
    travel_id integer NOT NULL
);


--
-- TOC entry 188 (class 1259 OID 50551)
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE albums_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2644 (class 0 OID 0)
-- Dependencies: 188
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE albums_id_seq OWNED BY album.id;


--
-- TOC entry 226 (class 1259 OID 51009)
-- Name: booked_hotel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE booked_hotel (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    address character varying(100) NOT NULL,
    price integer,
    check_in_time timestamp without time zone NOT NULL,
    check_out_time timestamp without time zone,
    hotel_name character varying(50)
);


--
-- TOC entry 225 (class 1259 OID 51007)
-- Name: booked_hotels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE booked_hotels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2645 (class 0 OID 0)
-- Dependencies: 225
-- Name: booked_hotels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE booked_hotels_id_seq OWNED BY booked_hotel.id;


--
-- TOC entry 189 (class 1259 OID 50553)
-- Name: chat_travel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE chat_travel (
    id integer NOT NULL,
    travel_id integer NOT NULL,
    sender_id integer NOT NULL,
    send_time timestamp without time zone NOT NULL,
    body text NOT NULL
);


--
-- TOC entry 190 (class 1259 OID 50559)
-- Name: chat_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE chat_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2646 (class 0 OID 0)
-- Dependencies: 190
-- Name: chat_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE chat_travel_id_seq OWNED BY chat_travel.id;


--
-- TOC entry 191 (class 1259 OID 50561)
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE cities (
    city_id integer NOT NULL,
    name character varying(50) NOT NULL,
    state_id integer NOT NULL
);


--
-- TOC entry 192 (class 1259 OID 50564)
-- Name: cities_city_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE cities_city_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2647 (class 0 OID 0)
-- Dependencies: 192
-- Name: cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE cities_city_id_seq OWNED BY cities.city_id;


--
-- TOC entry 193 (class 1259 OID 50566)
-- Name: comment_photo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE comment_photo (
    id integer NOT NULL,
    photo_id integer NOT NULL,
    commentator_id integer NOT NULL,
    comment text NOT NULL,
    create_time timestamp without time zone NOT NULL
);


--
-- TOC entry 194 (class 1259 OID 50572)
-- Name: comment_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE comment_photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2648 (class 0 OID 0)
-- Dependencies: 194
-- Name: comment_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE comment_photo_id_seq OWNED BY comment_photo.id;


--
-- TOC entry 195 (class 1259 OID 50574)
-- Name: countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE countries (
    country_id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- TOC entry 196 (class 1259 OID 50577)
-- Name: countries_country_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE countries_country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2649 (class 0 OID 0)
-- Dependencies: 196
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE countries_country_id_seq OWNED BY countries.country_id;


--
-- TOC entry 197 (class 1259 OID 50579)
-- Name: friend; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE friend (
    user_1 integer NOT NULL,
    user_2 integer NOT NULL
);


--
-- TOC entry 198 (class 1259 OID 50582)
-- Name: genders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE genders (
    id integer NOT NULL,
    gender character varying(20) NOT NULL
);


--
-- TOC entry 199 (class 1259 OID 50585)
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE genders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2650 (class 0 OID 0)
-- Dependencies: 199
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE genders_id_seq OWNED BY genders.id;


--
-- TOC entry 200 (class 1259 OID 50587)
-- Name: messages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE messages (
    id integer NOT NULL,
    sender_id integer NOT NULL,
    recipient_id integer NOT NULL,
    send_time timestamp without time zone NOT NULL,
    body text NOT NULL
);


--
-- TOC entry 201 (class 1259 OID 50593)
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2651 (class 0 OID 0)
-- Dependencies: 201
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE messages_id_seq OWNED BY messages.id;


--
-- TOC entry 214 (class 1259 OID 50810)
-- Name: part_of_travel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE part_of_travel (
    id integer NOT NULL,
    travel_id integer NOT NULL,
    date date NOT NULL,
    description text,
    is_actice boolean DEFAULT true NOT NULL,
    info text
);


--
-- TOC entry 213 (class 1259 OID 50808)
-- Name: part_of_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE part_of_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2652 (class 0 OID 0)
-- Dependencies: 213
-- Name: part_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE part_of_travel_id_seq OWNED BY part_of_travel.id;


--
-- TOC entry 202 (class 1259 OID 50595)
-- Name: photos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE photos (
    id integer NOT NULL,
    album_id integer NOT NULL,
    owner_id integer NOT NULL,
    path_to_photo character varying(100) NOT NULL
);


--
-- TOC entry 203 (class 1259 OID 50598)
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2653 (class 0 OID 0)
-- Dependencies: 203
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- TOC entry 222 (class 1259 OID 50916)
-- Name: sight; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE sight (
    id integer NOT NULL,
    country_id integer NOT NULL,
    state_id integer NOT NULL,
    city_id integer NOT NULL,
    description text
);


--
-- TOC entry 221 (class 1259 OID 50914)
-- Name: planned_attractions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE planned_attractions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2654 (class 0 OID 0)
-- Dependencies: 221
-- Name: planned_attractions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE planned_attractions_id_seq OWNED BY sight.id;


--
-- TOC entry 204 (class 1259 OID 50609)
-- Name: post_of_travel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE post_of_travel (
    id integer NOT NULL,
    owner_id integer NOT NULL,
    travel_id integer NOT NULL,
    body text NOT NULL,
    send_time timestamp without time zone NOT NULL
);


--
-- TOC entry 205 (class 1259 OID 50615)
-- Name: post_of_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE post_of_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2655 (class 0 OID 0)
-- Dependencies: 205
-- Name: post_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE post_of_travel_id_seq OWNED BY post_of_travel.id;


--
-- TOC entry 206 (class 1259 OID 50617)
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 50620)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2656 (class 0 OID 0)
-- Dependencies: 207
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- TOC entry 208 (class 1259 OID 50622)
-- Name: states; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE states (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    country_id integer NOT NULL
);


--
-- TOC entry 209 (class 1259 OID 50625)
-- Name: states_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE states_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2657 (class 0 OID 0)
-- Dependencies: 209
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE states_id_seq OWNED BY states.id;


--
-- TOC entry 218 (class 1259 OID 50860)
-- Name: travel_by_bus; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travel_by_bus (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    start_place integer NOT NULL,
    end_place integer NOT NULL,
    start_station character varying(50) NOT NULL,
    end_station character varying(50) NOT NULL,
    platform integer,
    bus_number character varying(5),
    distance integer,
    price integer,
    departure timestamp without time zone,
    arrival timestamp without time zone
);


--
-- TOC entry 216 (class 1259 OID 50844)
-- Name: travel_by_car; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travel_by_car (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    start_address character varying(255) NOT NULL,
    end_address character varying(255) NOT NULL,
    company character varying(100),
    car_description character varying(100),
    price integer,
    pick_up_time timestamp without time zone NOT NULL,
    drop_off_time timestamp without time zone
);


--
-- TOC entry 224 (class 1259 OID 50947)
-- Name: travel_by_flight; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travel_by_flight (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    start_place integer NOT NULL,
    end_place integer NOT NULL,
    start_airport_name character varying(100) NOT NULL,
    end_airport_name character varying(100) NOT NULL,
    airline character varying(100) NOT NULL,
    flight_number integer,
    destance integer,
    price integer,
    departure timestamp without time zone NOT NULL,
    arrival timestamp without time zone NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 50945)
-- Name: travel_by_flight_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travel_by_flight_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2658 (class 0 OID 0)
-- Dependencies: 223
-- Name: travel_by_flight_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travel_by_flight_id_seq OWNED BY travel_by_flight.id;


--
-- TOC entry 220 (class 1259 OID 50883)
-- Name: travel_by_rail; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travel_by_rail (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    start_station character varying(50) NOT NULL,
    end_station character varying(50) NOT NULL,
    platform integer,
    train_number character varying(5),
    distance integer,
    price integer,
    start_place integer NOT NULL,
    end_place integer NOT NULL,
    departure timestamp without time zone,
    arrival timestamp without time zone
);


--
-- TOC entry 219 (class 1259 OID 50881)
-- Name: travel_by_rail_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travel_by_rail_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2659 (class 0 OID 0)
-- Dependencies: 219
-- Name: travel_by_rail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travel_by_rail_id_seq OWNED BY travel_by_rail.id;


--
-- TOC entry 228 (class 1259 OID 51022)
-- Name: travel_to_sight; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travel_to_sight (
    id integer NOT NULL,
    part_of_travel integer NOT NULL,
    sight_id integer NOT NULL
);


--
-- TOC entry 227 (class 1259 OID 51020)
-- Name: travel_to_sight_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travel_to_sight_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2660 (class 0 OID 0)
-- Dependencies: 227
-- Name: travel_to_sight_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travel_to_sight_id_seq OWNED BY travel_to_sight.id;


--
-- TOC entry 210 (class 1259 OID 50627)
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE travels (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    start_date date NOT NULL,
    end_date date,
    info text,
    is_active boolean NOT NULL
);


--
-- TOC entry 217 (class 1259 OID 50858)
-- Name: travels_by_buss_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travels_by_buss_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2661 (class 0 OID 0)
-- Dependencies: 217
-- Name: travels_by_buss_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travels_by_buss_id_seq OWNED BY travel_by_bus.id;


--
-- TOC entry 215 (class 1259 OID 50842)
-- Name: travels_by_car_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travels_by_car_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2662 (class 0 OID 0)
-- Dependencies: 215
-- Name: travels_by_car_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travels_by_car_id_seq OWNED BY travel_by_car.id;


--
-- TOC entry 211 (class 1259 OID 50633)
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2663 (class 0 OID 0)
-- Dependencies: 211
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travels_id_seq OWNED BY travels.id;


--
-- TOC entry 185 (class 1259 OID 50537)
-- Name: user; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "user" (
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


--
-- TOC entry 186 (class 1259 OID 50543)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2664 (class 0 OID 0)
-- Dependencies: 186
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE user_id_seq OWNED BY "user".id;


--
-- TOC entry 212 (class 1259 OID 50635)
-- Name: user_to_travel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE user_to_travel (
    user_id integer NOT NULL,
    travel_id integer NOT NULL,
    role_id integer NOT NULL
);


--
-- TOC entry 2406 (class 2604 OID 50638)
-- Name: album id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY album ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- TOC entry 2425 (class 2604 OID 51012)
-- Name: booked_hotel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY booked_hotel ALTER COLUMN id SET DEFAULT nextval('booked_hotels_id_seq'::regclass);


--
-- TOC entry 2407 (class 2604 OID 50639)
-- Name: chat_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel ALTER COLUMN id SET DEFAULT nextval('chat_travel_id_seq'::regclass);


--
-- TOC entry 2408 (class 2604 OID 50640)
-- Name: cities city_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities ALTER COLUMN city_id SET DEFAULT nextval('cities_city_id_seq'::regclass);


--
-- TOC entry 2409 (class 2604 OID 50641)
-- Name: comment_photo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo ALTER COLUMN id SET DEFAULT nextval('comment_photo_id_seq'::regclass);


--
-- TOC entry 2410 (class 2604 OID 50642)
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY countries ALTER COLUMN country_id SET DEFAULT nextval('countries_country_id_seq'::regclass);


--
-- TOC entry 2411 (class 2604 OID 50643)
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY genders ALTER COLUMN id SET DEFAULT nextval('genders_id_seq'::regclass);


--
-- TOC entry 2412 (class 2604 OID 50644)
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- TOC entry 2418 (class 2604 OID 50813)
-- Name: part_of_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY part_of_travel ALTER COLUMN id SET DEFAULT nextval('part_of_travel_id_seq'::regclass);


--
-- TOC entry 2413 (class 2604 OID 50645)
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- TOC entry 2414 (class 2604 OID 50646)
-- Name: post_of_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel ALTER COLUMN id SET DEFAULT nextval('post_of_travel_id_seq'::regclass);


--
-- TOC entry 2415 (class 2604 OID 50647)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- TOC entry 2423 (class 2604 OID 50919)
-- Name: sight id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY sight ALTER COLUMN id SET DEFAULT nextval('planned_attractions_id_seq'::regclass);


--
-- TOC entry 2416 (class 2604 OID 50648)
-- Name: states id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY states ALTER COLUMN id SET DEFAULT nextval('states_id_seq'::regclass);


--
-- TOC entry 2421 (class 2604 OID 50863)
-- Name: travel_by_bus id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_bus ALTER COLUMN id SET DEFAULT nextval('travels_by_buss_id_seq'::regclass);


--
-- TOC entry 2420 (class 2604 OID 50847)
-- Name: travel_by_car id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_car ALTER COLUMN id SET DEFAULT nextval('travels_by_car_id_seq'::regclass);


--
-- TOC entry 2424 (class 2604 OID 50950)
-- Name: travel_by_flight id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_flight ALTER COLUMN id SET DEFAULT nextval('travel_by_flight_id_seq'::regclass);


--
-- TOC entry 2422 (class 2604 OID 50886)
-- Name: travel_by_rail id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_rail ALTER COLUMN id SET DEFAULT nextval('travel_by_rail_id_seq'::regclass);


--
-- TOC entry 2426 (class 2604 OID 51025)
-- Name: travel_to_sight id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_to_sight ALTER COLUMN id SET DEFAULT nextval('travel_to_sight_id_seq'::regclass);


--
-- TOC entry 2417 (class 2604 OID 50649)
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travels ALTER COLUMN id SET DEFAULT nextval('travels_id_seq'::regclass);


--
-- TOC entry 2405 (class 2604 OID 50650)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- TOC entry 2429 (class 2606 OID 50652)
-- Name: user USER_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);


--
-- TOC entry 2431 (class 2606 OID 50654)
-- Name: album albums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY album
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- TOC entry 2479 (class 2606 OID 51014)
-- Name: booked_hotel booked_hotels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY booked_hotel
    ADD CONSTRAINT booked_hotels_pkey PRIMARY KEY (id);


--
-- TOC entry 2436 (class 2606 OID 50656)
-- Name: chat_travel chat_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 2439 (class 2606 OID 50658)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (city_id);


--
-- TOC entry 2441 (class 2606 OID 50660)
-- Name: comment_photo comment_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_pkey PRIMARY KEY (id);


--
-- TOC entry 2443 (class 2606 OID 50662)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- TOC entry 2445 (class 2606 OID 50664)
-- Name: friend friends_user_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friend
    ADD CONSTRAINT friends_user_pkey PRIMARY KEY (user_1, user_2);


--
-- TOC entry 2448 (class 2606 OID 50666)
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- TOC entry 2453 (class 2606 OID 50668)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 2467 (class 2606 OID 50841)
-- Name: part_of_travel part_of_travel_id_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY part_of_travel
    ADD CONSTRAINT part_of_travel_id_pk PRIMARY KEY (id);


--
-- TOC entry 2455 (class 2606 OID 50670)
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- TOC entry 2475 (class 2606 OID 50921)
-- Name: sight planned_attractions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sight
    ADD CONSTRAINT planned_attractions_pkey PRIMARY KEY (id);


--
-- TOC entry 2457 (class 2606 OID 50674)
-- Name: post_of_travel post_of_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 2460 (class 2606 OID 50676)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 2463 (class 2606 OID 50678)
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- TOC entry 2477 (class 2606 OID 50952)
-- Name: travel_by_flight travel_by_flight_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_flight
    ADD CONSTRAINT travel_by_flight_pkey PRIMARY KEY (id);


--
-- TOC entry 2473 (class 2606 OID 50888)
-- Name: travel_by_rail travel_by_rail_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_rail
    ADD CONSTRAINT travel_by_rail_pkey PRIMARY KEY (id);


--
-- TOC entry 2481 (class 2606 OID 51027)
-- Name: travel_to_sight travel_to_sight_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_to_sight
    ADD CONSTRAINT travel_to_sight_pkey PRIMARY KEY (id);


--
-- TOC entry 2471 (class 2606 OID 50865)
-- Name: travel_by_bus travels_by_buss_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_bus
    ADD CONSTRAINT travels_by_buss_pkey PRIMARY KEY (id);


--
-- TOC entry 2469 (class 2606 OID 50849)
-- Name: travel_by_car travels_by_car_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_car
    ADD CONSTRAINT travels_by_car_pkey PRIMARY KEY (id);


--
-- TOC entry 2465 (class 2606 OID 50680)
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- TOC entry 2432 (class 1259 OID 50681)
-- Name: CHAT_TRAVEL_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_ID_index" ON chat_travel USING btree (id);


--
-- TOC entry 2433 (class 1259 OID 50682)
-- Name: CHAT_TRAVEL_SENDER_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_SENDER_ID_index" ON chat_travel USING btree (sender_id);


--
-- TOC entry 2434 (class 1259 OID 50683)
-- Name: CHAT_TRAVEL_SEND_TIME_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_SEND_TIME_index" ON chat_travel USING btree (send_time);


--
-- TOC entry 2449 (class 1259 OID 50684)
-- Name: MESSAGES_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_ID_index" ON messages USING btree (id);


--
-- TOC entry 2450 (class 1259 OID 50685)
-- Name: MESSAGES_RECIPIENT_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_RECIPIENT_ID_index" ON messages USING btree (recipient_id);


--
-- TOC entry 2451 (class 1259 OID 50686)
-- Name: MESSAGES_SENDER_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_SENDER_ID_index" ON messages USING btree (sender_id);


--
-- TOC entry 2458 (class 1259 OID 50687)
-- Name: ROLES_NAME_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "ROLES_NAME_uindex" ON roles USING btree (name);


--
-- TOC entry 2427 (class 1259 OID 50688)
-- Name: USER_EMAIL_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "USER_EMAIL_uindex" ON "user" USING btree (email);


--
-- TOC entry 2437 (class 1259 OID 50689)
-- Name: cities_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX cities_name_index ON cities USING btree (name);


--
-- TOC entry 2446 (class 1259 OID 50690)
-- Name: genders_gender_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX genders_gender_uindex ON genders USING btree (gender);


--
-- TOC entry 2461 (class 1259 OID 50691)
-- Name: states_name_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX states_name_index ON states USING btree (name);


--
-- TOC entry 2485 (class 2606 OID 50692)
-- Name: album albums_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY album
    ADD CONSTRAINT albums_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2517 (class 2606 OID 51015)
-- Name: booked_hotel booked_hotels_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY booked_hotel
    ADD CONSTRAINT booked_hotels_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2486 (class 2606 OID 50697)
-- Name: chat_travel chat_travel_travels_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_travels_travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2487 (class 2606 OID 50702)
-- Name: chat_travel chat_travel_user_sender_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_user_sender_id_fk FOREIGN KEY (sender_id) REFERENCES "user"(id);


--
-- TOC entry 2488 (class 2606 OID 50707)
-- Name: cities cities_states_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_states_id_fk FOREIGN KEY (state_id) REFERENCES states(id);


--
-- TOC entry 2489 (class 2606 OID 50712)
-- Name: comment_photo comment_photo_photos_photo_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_photos_photo_id_fk FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- TOC entry 2490 (class 2606 OID 50717)
-- Name: comment_photo comment_photo_user_commentator_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_user_commentator_id_fk FOREIGN KEY (commentator_id) REFERENCES "user"(id);


--
-- TOC entry 2491 (class 2606 OID 50722)
-- Name: friend friends_user_user_1_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friend
    ADD CONSTRAINT friends_user_user_1_fk FOREIGN KEY (user_1) REFERENCES "user"(id);


--
-- TOC entry 2492 (class 2606 OID 50727)
-- Name: friend friends_user_user_2_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friend
    ADD CONSTRAINT friends_user_user_2_fk FOREIGN KEY (user_2) REFERENCES "user"(id);


--
-- TOC entry 2493 (class 2606 OID 50732)
-- Name: messages messages_sender_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_sender_id_user_id_fk FOREIGN KEY (sender_id) REFERENCES "user"(id);


--
-- TOC entry 2494 (class 2606 OID 50737)
-- Name: messages messages_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_user_id_fk FOREIGN KEY (recipient_id) REFERENCES "user"(id);


--
-- TOC entry 2503 (class 2606 OID 50817)
-- Name: part_of_travel part_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY part_of_travel
    ADD CONSTRAINT part_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2495 (class 2606 OID 50742)
-- Name: photos photos_albums_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_albums_id_fk FOREIGN KEY (album_id) REFERENCES album(id);


--
-- TOC entry 2496 (class 2606 OID 50747)
-- Name: photos photos_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_user_id_fk FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- TOC entry 2513 (class 2606 OID 50937)
-- Name: sight planned_attractions_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sight
    ADD CONSTRAINT planned_attractions_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- TOC entry 2511 (class 2606 OID 50927)
-- Name: sight planned_attractions_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sight
    ADD CONSTRAINT planned_attractions_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- TOC entry 2512 (class 2606 OID 50932)
-- Name: sight planned_attractions_states_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY sight
    ADD CONSTRAINT planned_attractions_states_id_fk FOREIGN KEY (state_id) REFERENCES states(id);


--
-- TOC entry 2497 (class 2606 OID 50762)
-- Name: post_of_travel post_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2498 (class 2606 OID 50767)
-- Name: post_of_travel post_of_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_user_id_fk FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- TOC entry 2499 (class 2606 OID 50772)
-- Name: states states_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- TOC entry 2506 (class 2606 OID 50909)
-- Name: travel_by_bus travel_by_bus_cities_end_place_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_bus
    ADD CONSTRAINT travel_by_bus_cities_end_place_city_id_fk FOREIGN KEY (end_place) REFERENCES cities(city_id);


--
-- TOC entry 2507 (class 2606 OID 50904)
-- Name: travel_by_bus travel_by_bus_cities_start_place_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_bus
    ADD CONSTRAINT travel_by_bus_cities_start_place_city_id_fk FOREIGN KEY (start_place) REFERENCES cities(city_id);


--
-- TOC entry 2515 (class 2606 OID 50963)
-- Name: travel_by_flight travel_by_flight_cities_end_place_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_flight
    ADD CONSTRAINT travel_by_flight_cities_end_place_city_id_fk FOREIGN KEY (end_place) REFERENCES cities(city_id);


--
-- TOC entry 2514 (class 2606 OID 50958)
-- Name: travel_by_flight travel_by_flight_cities_start_place_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_flight
    ADD CONSTRAINT travel_by_flight_cities_start_place_city_id_fk FOREIGN KEY (start_place) REFERENCES cities(city_id);


--
-- TOC entry 2516 (class 2606 OID 50953)
-- Name: travel_by_flight travel_by_flight_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_flight
    ADD CONSTRAINT travel_by_flight_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2508 (class 2606 OID 50894)
-- Name: travel_by_rail travel_by_rail_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_rail
    ADD CONSTRAINT travel_by_rail_cities_city_id_fk FOREIGN KEY (start_place) REFERENCES cities(city_id);


--
-- TOC entry 2509 (class 2606 OID 50899)
-- Name: travel_by_rail travel_by_rail_cities_end_place_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_rail
    ADD CONSTRAINT travel_by_rail_cities_end_place_city_id_fk FOREIGN KEY (end_place) REFERENCES cities(city_id);


--
-- TOC entry 2510 (class 2606 OID 50889)
-- Name: travel_by_rail travel_by_rail_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_rail
    ADD CONSTRAINT travel_by_rail_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2518 (class 2606 OID 51028)
-- Name: travel_to_sight travel_to_sight_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_to_sight
    ADD CONSTRAINT travel_to_sight_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2519 (class 2606 OID 51033)
-- Name: travel_to_sight travel_to_sight_sight_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_to_sight
    ADD CONSTRAINT travel_to_sight_sight_id_fk FOREIGN KEY (sight_id) REFERENCES sight(id);


--
-- TOC entry 2505 (class 2606 OID 50866)
-- Name: travel_by_bus travels_by_buss_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_bus
    ADD CONSTRAINT travels_by_buss_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2504 (class 2606 OID 50850)
-- Name: travel_by_car travels_by_car_part_of_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travel_by_car
    ADD CONSTRAINT travels_by_car_part_of_travel_id_fk FOREIGN KEY (part_of_travel) REFERENCES part_of_travel(id);


--
-- TOC entry 2482 (class 2606 OID 50777)
-- Name: user user_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- TOC entry 2483 (class 2606 OID 50782)
-- Name: user user_genders_gender_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_genders_gender_fk FOREIGN KEY (gender) REFERENCES genders(id);


--
-- TOC entry 2484 (class 2606 OID 50787)
-- Name: user user_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_roles_id_fk FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- TOC entry 2500 (class 2606 OID 50792)
-- Name: user_to_travel user_to_travel_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 2501 (class 2606 OID 50797)
-- Name: user_to_travel user_to_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2502 (class 2606 OID 50802)
-- Name: user_to_travel user_to_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_user_id_fk FOREIGN KEY (user_id) REFERENCES "user"(id);


-- Completed on 2017-04-09 15:13:20 MSK

--
-- PostgreSQL database dump complete
--
