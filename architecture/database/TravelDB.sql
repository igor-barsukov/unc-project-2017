--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

-- Started on 2017-04-23 16:50:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12387)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 3786 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- TOC entry 2 (class 3079 OID 16394)
-- Name: postgis; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS postgis WITH SCHEMA public;


--
-- TOC entry 3787 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION postgis; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION postgis IS 'PostGIS geometry, geography, and raster spatial types and functions';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 201 (class 1259 OID 17889)
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
-- TOC entry 202 (class 1259 OID 17895)
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
-- TOC entry 3788 (class 0 OID 0)
-- Dependencies: 202
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activities_id_seq OWNED BY activities.id;


--
-- TOC entry 203 (class 1259 OID 17897)
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
-- TOC entry 204 (class 1259 OID 17903)
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
-- TOC entry 3789 (class 0 OID 0)
-- Dependencies: 204
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE albums_id_seq OWNED BY albums.id;


--
-- TOC entry 205 (class 1259 OID 17905)
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
-- TOC entry 206 (class 1259 OID 17911)
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
-- TOC entry 3790 (class 0 OID 0)
-- Dependencies: 206
-- Name: chat_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE chat_travel_id_seq OWNED BY chat_travel.id;


--
-- TOC entry 207 (class 1259 OID 17913)
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cities (
    city_id integer NOT NULL,
    name character varying(50) NOT NULL,
    state_id integer NOT NULL
);


ALTER TABLE cities OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 17916)
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
-- TOC entry 3791 (class 0 OID 0)
-- Dependencies: 208
-- Name: cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE cities_city_id_seq OWNED BY cities.city_id;


--
-- TOC entry 209 (class 1259 OID 17918)
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
-- TOC entry 210 (class 1259 OID 17924)
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
-- TOC entry 3792 (class 0 OID 0)
-- Dependencies: 210
-- Name: comment_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE comment_photo_id_seq OWNED BY comment_photo.id;


--
-- TOC entry 211 (class 1259 OID 17926)
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE countries (
    country_id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE countries OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 17929)
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
-- TOC entry 3793 (class 0 OID 0)
-- Dependencies: 212
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE countries_country_id_seq OWNED BY countries.country_id;


--
-- TOC entry 213 (class 1259 OID 17931)
-- Name: friends; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE friends (
    user_1 integer NOT NULL,
    user_2 integer NOT NULL
);


ALTER TABLE friends OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 17934)
-- Name: genders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE genders (
    id integer NOT NULL,
    gender character varying(20) NOT NULL
);


ALTER TABLE genders OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 17937)
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
-- TOC entry 3794 (class 0 OID 0)
-- Dependencies: 215
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE genders_id_seq OWNED BY genders.id;


--
-- TOC entry 216 (class 1259 OID 17939)
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
-- TOC entry 217 (class 1259 OID 17945)
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
-- TOC entry 3795 (class 0 OID 0)
-- Dependencies: 217
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE messages_id_seq OWNED BY messages.id;


--
-- TOC entry 237 (class 1259 OID 18381)
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
-- TOC entry 218 (class 1259 OID 17947)
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
-- TOC entry 219 (class 1259 OID 17953)
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
-- TOC entry 3796 (class 0 OID 0)
-- Dependencies: 219
-- Name: movements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE movements_id_seq OWNED BY movements.id;


--
-- TOC entry 220 (class 1259 OID 17955)
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
-- TOC entry 3797 (class 0 OID 0)
-- Dependencies: 220
-- Name: movements_transport_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE movements_transport_id_seq OWNED BY movements.transport_id;


--
-- TOC entry 221 (class 1259 OID 17957)
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
-- TOC entry 222 (class 1259 OID 17960)
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
-- TOC entry 3798 (class 0 OID 0)
-- Dependencies: 222
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- TOC entry 223 (class 1259 OID 17962)
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
-- TOC entry 224 (class 1259 OID 17964)
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
-- TOC entry 225 (class 1259 OID 17970)
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
-- TOC entry 3799 (class 0 OID 0)
-- Dependencies: 225
-- Name: post_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE post_of_travel_id_seq OWNED BY post_of_travel.id;


--
-- TOC entry 226 (class 1259 OID 17972)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


ALTER TABLE roles OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17975)
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
-- TOC entry 3800 (class 0 OID 0)
-- Dependencies: 227
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- TOC entry 228 (class 1259 OID 17977)
-- Name: states; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE states (
    id integer NOT NULL,
    country_id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE states OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 17983)
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
-- TOC entry 3801 (class 0 OID 0)
-- Dependencies: 229
-- Name: states_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE states_id_seq OWNED BY states.id;


--
-- TOC entry 230 (class 1259 OID 17985)
-- Name: transports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE transports (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE transports OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 17991)
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
-- TOC entry 3802 (class 0 OID 0)
-- Dependencies: 231
-- Name: transports_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "transports_Id_seq" OWNED BY transports.id;


--
-- TOC entry 232 (class 1259 OID 17993)
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
-- TOC entry 233 (class 1259 OID 17999)
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
-- TOC entry 3803 (class 0 OID 0)
-- Dependencies: 233
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE travels_id_seq OWNED BY travels.id;


--
-- TOC entry 234 (class 1259 OID 18001)
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
-- TOC entry 235 (class 1259 OID 18007)
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
-- TOC entry 3804 (class 0 OID 0)
-- Dependencies: 235
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_id_seq OWNED BY users.id;


--
-- TOC entry 236 (class 1259 OID 18009)
-- Name: user_to_travel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE user_to_travel (
    user_id integer NOT NULL,
    travel_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE user_to_travel OWNER TO postgres;

--
-- TOC entry 3496 (class 2604 OID 18383)
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities ALTER COLUMN id SET DEFAULT nextval('activities_id_seq'::regclass);


--
-- TOC entry 3497 (class 2604 OID 18013)
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- TOC entry 3498 (class 2604 OID 18014)
-- Name: chat_travel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel ALTER COLUMN id SET DEFAULT nextval('chat_travel_id_seq'::regclass);


--
-- TOC entry 3499 (class 2604 OID 18015)
-- Name: cities city_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities ALTER COLUMN city_id SET DEFAULT nextval('cities_city_id_seq'::regclass);


--
-- TOC entry 3500 (class 2604 OID 18016)
-- Name: comment_photo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo ALTER COLUMN id SET DEFAULT nextval('comment_photo_id_seq'::regclass);


--
-- TOC entry 3501 (class 2604 OID 18017)
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries ALTER COLUMN country_id SET DEFAULT nextval('countries_country_id_seq'::regclass);


--
-- TOC entry 3502 (class 2604 OID 18018)
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders ALTER COLUMN id SET DEFAULT nextval('genders_id_seq'::regclass);


--
-- TOC entry 3503 (class 2604 OID 18019)
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- TOC entry 3504 (class 2604 OID 18020)
-- Name: movements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements ALTER COLUMN id SET DEFAULT nextval('movements_id_seq'::regclass);


--
-- TOC entry 3505 (class 2604 OID 18022)
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- TOC entry 3506 (class 2604 OID 18023)
-- Name: post_of_travel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel ALTER COLUMN id SET DEFAULT nextval('post_of_travel_id_seq'::regclass);


--
-- TOC entry 3507 (class 2604 OID 18024)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- TOC entry 3508 (class 2604 OID 18025)
-- Name: states id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states ALTER COLUMN id SET DEFAULT nextval('states_id_seq'::regclass);


--
-- TOC entry 3509 (class 2604 OID 18026)
-- Name: transports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports ALTER COLUMN id SET DEFAULT nextval('"transports_Id_seq"'::regclass);


--
-- TOC entry 3510 (class 2604 OID 18027)
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels ALTER COLUMN id SET DEFAULT nextval('travels_id_seq'::regclass);


--
-- TOC entry 3511 (class 2604 OID 18028)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- TOC entry 3743 (class 0 OID 17889)
-- Dependencies: 201
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3805 (class 0 OID 0)
-- Dependencies: 202
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('activities_id_seq', 4, true);


--
-- TOC entry 3745 (class 0 OID 17897)
-- Dependencies: 203
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- TOC entry 3806 (class 0 OID 0)
-- Dependencies: 204
-- Name: albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('albums_id_seq', 1, false);


--
-- TOC entry 3747 (class 0 OID 17905)
-- Dependencies: 205
-- Data for Name: chat_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--




--
-- TOC entry 3807 (class 0 OID 0)
-- Dependencies: 206
-- Name: chat_travel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('chat_travel_id_seq', 1, false);


--
-- TOC entry 3808 (class 0 OID 0)
-- Dependencies: 208
-- Name: cities_city_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('cities_city_id_seq', 1, false);


--
-- TOC entry 3751 (class 0 OID 17918)
-- Dependencies: 209
-- Data for Name: comment_photo; Type: TABLE DATA; Schema: public; Owner: postgres
--




SELECT pg_catalog.setval('countries_country_id_seq', 1, false);


--
-- TOC entry 3755 (class 0 OID 17931)
-- Dependencies: 213
-- Data for Name: friends; Type: TABLE DATA; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('genders_id_seq', 1, false);


--
-- TOC entry 3758 (class 0 OID 17939)
-- Dependencies: 216
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- TOC entry 3812 (class 0 OID 0)
-- Dependencies: 217
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('messages_id_seq', 1, false);


--
-- TOC entry 3813 (class 0 OID 0)
-- Dependencies: 237
-- Name: movement_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('movement_id_seq', 1, false);


--
-- TOC entry 3760 (class 0 OID 17947)
-- Dependencies: 218
-- Data for Name: movements; Type: TABLE DATA; Schema: public; Owner: postgres
--



SELECT pg_catalog.setval('movements_id_seq', 1, true);


--
-- TOC entry 3815 (class 0 OID 0)
-- Dependencies: 220
-- Name: movements_transport_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('movements_transport_id_seq', 1, false);


--
-- TOC entry 3763 (class 0 OID 17957)
-- Dependencies: 221
-- Data for Name: photos; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3816 (class 0 OID 0)
-- Dependencies: 222
-- Name: photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('photos_id_seq', 1, false);


--
-- TOC entry 3817 (class 0 OID 0)
-- Dependencies: 223
-- Name: plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('plans_id_seq', 1, false);


--
-- TOC entry 3766 (class 0 OID 17964)
-- Dependencies: 224
-- Data for Name: post_of_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3818 (class 0 OID 0)
-- Dependencies: 225
-- Name: post_of_travel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('post_of_travel_id_seq', 1, false);


--
-- TOC entry 3768 (class 0 OID 17972)
-- Dependencies: 226
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--




--
-- TOC entry 3819 (class 0 OID 0)
-- Dependencies: 227
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('roles_id_seq', 1, false);


--
-- TOC entry 3494 (class 0 OID 16691)
-- Dependencies: 187
-- Data for Name: spatial_ref_sys; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3770 (class 0 OID 17977)
-- Dependencies: 228
-- Data for Name: states; Type: TABLE DATA; Schema: public; Owner: postgres
--



SELECT pg_catalog.setval('states_id_seq', 1, false);


--
-- TOC entry 3772 (class 0 OID 17985)
-- Dependencies: 230
-- Data for Name: transports; Type: TABLE DATA; Schema: public; Owner: postgres
--


--
-- TOC entry 3821 (class 0 OID 0)
-- Dependencies: 231
-- Name: transports_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"transports_Id_seq"', 1, false);


--
-- TOC entry 3774 (class 0 OID 17993)
-- Dependencies: 232
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: postgres
--



SELECT pg_catalog.setval('travels_id_seq', 1, false);


--
-- TOC entry 3823 (class 0 OID 0)
-- Dependencies: 235
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_id_seq', 1, false);


--
-- TOC entry 3778 (class 0 OID 18009)
-- Dependencies: 236
-- Data for Name: user_to_travel; Type: TABLE DATA; Schema: public; Owner: postgres
--



ALTER TABLE ONLY users
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);


--
-- TOC entry 3513 (class 2606 OID 18385)
-- Name: activities activity_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT activity_id PRIMARY KEY (id);


--
-- TOC entry 3515 (class 2606 OID 18034)
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- TOC entry 3520 (class 2606 OID 18036)
-- Name: chat_travel chat_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 3523 (class 2606 OID 18038)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (city_id);


--
-- TOC entry 3525 (class 2606 OID 18040)
-- Name: comment_photo comment_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_pkey PRIMARY KEY (id);


--
-- TOC entry 3527 (class 2606 OID 18042)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- TOC entry 3529 (class 2606 OID 18044)
-- Name: friends friends_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_pkey PRIMARY KEY (user_1, user_2);


--
-- TOC entry 3532 (class 2606 OID 18046)
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- TOC entry 3550 (class 2606 OID 18048)
-- Name: transports id_transport; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports
    ADD CONSTRAINT id_transport PRIMARY KEY (id);


--
-- TOC entry 3537 (class 2606 OID 18050)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 3539 (class 2606 OID 18052)
-- Name: movements movement_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT movement_id PRIMARY KEY (id);


--
-- TOC entry 3541 (class 2606 OID 18054)
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- TOC entry 3543 (class 2606 OID 18056)
-- Name: post_of_travel post_of_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 3546 (class 2606 OID 18058)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3548 (class 2606 OID 18060)
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- TOC entry 3552 (class 2606 OID 18062)
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- TOC entry 3557 (class 2606 OID 18064)
-- Name: user_to_travel user_to_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_pkey PRIMARY KEY (travel_id, user_id);


--
-- TOC entry 3516 (class 1259 OID 18065)
-- Name: CHAT_TRAVEL_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_ID_index" ON chat_travel USING btree (id);


--
-- TOC entry 3517 (class 1259 OID 18066)
-- Name: CHAT_TRAVEL_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SENDER_ID_index" ON chat_travel USING btree (sender_id);


--
-- TOC entry 3518 (class 1259 OID 18067)
-- Name: CHAT_TRAVEL_SEND_TIME_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SEND_TIME_index" ON chat_travel USING btree (send_time);


--
-- TOC entry 3533 (class 1259 OID 18068)
-- Name: MESSAGES_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_ID_index" ON messages USING btree (id);


--
-- TOC entry 3534 (class 1259 OID 18069)
-- Name: MESSAGES_RECIPIENT_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_RECIPIENT_ID_index" ON messages USING btree (recipient_id);


--
-- TOC entry 3535 (class 1259 OID 18070)
-- Name: MESSAGES_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_SENDER_ID_index" ON messages USING btree (sender_id);


--
-- TOC entry 3544 (class 1259 OID 18071)
-- Name: ROLES_NAME_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ROLES_NAME_uindex" ON roles USING btree (name);


--
-- TOC entry 3553 (class 1259 OID 18072)
-- Name: USER_EMAIL_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "USER_EMAIL_uindex" ON users USING btree (email);


--
-- TOC entry 3521 (class 1259 OID 18073)
-- Name: cities_name_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cities_name_index ON cities USING btree (name);


--
-- TOC entry 3530 (class 1259 OID 18074)
-- Name: genders_gender_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX genders_gender_uindex ON genders USING btree (gender);


--
-- TOC entry 3561 (class 2606 OID 18075)
-- Name: albums albums_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3563 (class 2606 OID 18080)
-- Name: chat_travel chat_travel_travels_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_travels_travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3564 (class 2606 OID 18085)
-- Name: chat_travel chat_travel_user_sender_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_user_sender_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3568 (class 2606 OID 18090)
-- Name: cities cities_states_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_states_id_fk FOREIGN KEY (state_id) REFERENCES states(id);


--
-- TOC entry 3570 (class 2606 OID 18095)
-- Name: comment_photo comment_photo_photos_photo_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_photos_photo_id_fk FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- TOC entry 3571 (class 2606 OID 18100)
-- Name: comment_photo comment_photo_user_commentator_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_user_commentator_id_fk FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- TOC entry 3579 (class 2606 OID 18290)
-- Name: friends friends_user_user_1_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_1_fk FOREIGN KEY (user_1) REFERENCES users(id);


--
-- TOC entry 3580 (class 2606 OID 18295)
-- Name: friends friends_user_user_2_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_2_fk FOREIGN KEY (user_2) REFERENCES users(id);


--
-- TOC entry 3585 (class 2606 OID 18300)
-- Name: messages messages_sender_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_sender_id_user_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3586 (class 2606 OID 18305)
-- Name: messages messages_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_user_id_fk FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- TOC entry 3594 (class 2606 OID 18310)
-- Name: photos photos_albums_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_albums_id_fk FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- TOC entry 3595 (class 2606 OID 18315)
-- Name: photos photos_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3599 (class 2606 OID 18320)
-- Name: post_of_travel post_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3600 (class 2606 OID 18325)
-- Name: post_of_travel post_of_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3602 (class 2606 OID 18330)
-- Name: states states_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- TOC entry 3589 (class 2606 OID 18335)
-- Name: movements transport_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT transport_id_fk FOREIGN KEY (transport_id) REFERENCES transports(id);


--
-- TOC entry 3590 (class 2606 OID 18340)
-- Name: movements travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3560 (class 2606 OID 18345)
-- Name: activities travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3609 (class 2606 OID 18350)
-- Name: users user_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(city_id);


--
-- TOC entry 3610 (class 2606 OID 18355)
-- Name: users user_genders_gender_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_genders_gender_fk FOREIGN KEY (gender) REFERENCES genders(id);


--
-- TOC entry 3611 (class 2606 OID 18360)
-- Name: users user_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_roles_id_fk FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- TOC entry 3616 (class 2606 OID 18365)
-- Name: user_to_travel user_to_travel_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3617 (class 2606 OID 18370)
-- Name: user_to_travel user_to_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3618 (class 2606 OID 18375)
-- Name: user_to_travel user_to_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id);


-- Completed on 2017-04-23 16:50:37

--
-- PostgreSQL database dump complete
--

