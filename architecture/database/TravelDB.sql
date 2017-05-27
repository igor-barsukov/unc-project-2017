--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.2
-- Dumped by pg_dump version 9.6.2

-- Started on 2017-05-27 17:35:33

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
-- TOC entry 3761 (class 0 OID 0)
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
-- TOC entry 3762 (class 0 OID 0)
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
    price numeric,
    ticket character varying(1000),
    coordinates point,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone NOT NULL,
    activity_type_id integer,
    city_id integer
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
-- TOC entry 3763 (class 0 OID 0)
-- Dependencies: 202
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activities_id_seq OWNED BY activities.id;


--
-- TOC entry 239 (class 1259 OID 36655)
-- Name: activity_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE activity_types (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE activity_types OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 36653)
-- Name: activity_type_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE activity_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE activity_type_id_seq OWNER TO postgres;

--
-- TOC entry 3764 (class 0 OID 0)
-- Dependencies: 238
-- Name: activity_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activity_type_id_seq OWNED BY activity_types.id;


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
-- TOC entry 3765 (class 0 OID 0)
-- Dependencies: 204
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE albums_id_seq OWNED BY albums.id;


--
-- TOC entry 205 (class 1259 OID 17905)
-- Name: chat_travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE chat_travels (
    id integer NOT NULL,
    travel_id integer NOT NULL,
    sender_id integer NOT NULL,
    send_time timestamp without time zone NOT NULL,
    body text NOT NULL
);


ALTER TABLE chat_travels OWNER TO postgres;

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
-- TOC entry 3766 (class 0 OID 0)
-- Dependencies: 206
-- Name: chat_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE chat_travel_id_seq OWNED BY chat_travels.id;


--
-- TOC entry 207 (class 1259 OID 17913)
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE cities (
    id integer NOT NULL,
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
-- TOC entry 3767 (class 0 OID 0)
-- Dependencies: 208
-- Name: cities_city_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE cities_city_id_seq OWNED BY cities.id;


--
-- TOC entry 240 (class 1259 OID 36664)
-- Name: city_to_travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE city_to_travels (
    city_id integer NOT NULL,
    travel_id integer NOT NULL
);


ALTER TABLE city_to_travels OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 17918)
-- Name: comment_photos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE comment_photos (
    id integer NOT NULL,
    photo_id integer NOT NULL,
    commentator_id integer NOT NULL,
    comment text NOT NULL,
    create_time timestamp without time zone NOT NULL
);


ALTER TABLE comment_photos OWNER TO postgres;

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
-- TOC entry 3768 (class 0 OID 0)
-- Dependencies: 210
-- Name: comment_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE comment_photo_id_seq OWNED BY comment_photos.id;


--
-- TOC entry 211 (class 1259 OID 17926)
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE countries (
    id integer NOT NULL,
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
-- TOC entry 3769 (class 0 OID 0)
-- Dependencies: 212
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE countries_country_id_seq OWNED BY countries.id;


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
    gender character varying(100) NOT NULL
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
-- TOC entry 3770 (class 0 OID 0)
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
-- TOC entry 3771 (class 0 OID 0)
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
-- TOC entry 3772 (class 0 OID 0)
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
-- TOC entry 3773 (class 0 OID 0)
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
    path_to_photo character varying(100) NOT NULL,
    coordinates point
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
-- TOC entry 3774 (class 0 OID 0)
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
-- Name: post_of_travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE post_of_travels (
    id integer NOT NULL,
    owner_id integer NOT NULL,
    travel_id integer NOT NULL,
    body text NOT NULL,
    send_time timestamp without time zone NOT NULL
);


ALTER TABLE post_of_travels OWNER TO postgres;

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
-- TOC entry 3775 (class 0 OID 0)
-- Dependencies: 225
-- Name: post_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE post_of_travel_id_seq OWNED BY post_of_travels.id;


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
-- TOC entry 3776 (class 0 OID 0)
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
-- TOC entry 3777 (class 0 OID 0)
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
-- TOC entry 3778 (class 0 OID 0)
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
    is_active boolean NOT NULL,
    photo character varying(1000)
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
-- TOC entry 3779 (class 0 OID 0)
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
    role_id integer,
    user_photo character varying(100),
    id_role integer
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
-- TOC entry 3780 (class 0 OID 0)
-- Dependencies: 235
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE user_id_seq OWNED BY users.id;


--
-- TOC entry 236 (class 1259 OID 18009)
-- Name: user_to_travels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE user_to_travels (
    user_id integer NOT NULL,
    travel_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE user_to_travels OWNER TO postgres;

--
-- TOC entry 3507 (class 2604 OID 39121)
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities ALTER COLUMN id SET DEFAULT nextval('activities_id_seq'::regclass);


--
-- TOC entry 3523 (class 2604 OID 39131)
-- Name: activity_types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_types ALTER COLUMN id SET DEFAULT nextval('activity_type_id_seq'::regclass);


--
-- TOC entry 3508 (class 2604 OID 18013)
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- TOC entry 3509 (class 2604 OID 18014)
-- Name: chat_travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels ALTER COLUMN id SET DEFAULT nextval('chat_travel_id_seq'::regclass);


--
-- TOC entry 3510 (class 2604 OID 18015)
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities ALTER COLUMN id SET DEFAULT nextval('cities_city_id_seq'::regclass);


--
-- TOC entry 3511 (class 2604 OID 18016)
-- Name: comment_photos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos ALTER COLUMN id SET DEFAULT nextval('comment_photo_id_seq'::regclass);


--
-- TOC entry 3512 (class 2604 OID 18017)
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries ALTER COLUMN id SET DEFAULT nextval('countries_country_id_seq'::regclass);


--
-- TOC entry 3513 (class 2604 OID 18018)
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders ALTER COLUMN id SET DEFAULT nextval('genders_id_seq'::regclass);


--
-- TOC entry 3514 (class 2604 OID 18019)
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- TOC entry 3515 (class 2604 OID 18020)
-- Name: movements id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements ALTER COLUMN id SET DEFAULT nextval('movements_id_seq'::regclass);


--
-- TOC entry 3516 (class 2604 OID 18022)
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- TOC entry 3517 (class 2604 OID 18023)
-- Name: post_of_travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels ALTER COLUMN id SET DEFAULT nextval('post_of_travel_id_seq'::regclass);


--
-- TOC entry 3518 (class 2604 OID 18024)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- TOC entry 3519 (class 2604 OID 18025)
-- Name: states id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states ALTER COLUMN id SET DEFAULT nextval('states_id_seq'::regclass);


--
-- TOC entry 3520 (class 2604 OID 18026)
-- Name: transports id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports ALTER COLUMN id SET DEFAULT nextval('"transports_Id_seq"'::regclass);


--
-- TOC entry 3521 (class 2604 OID 18027)
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels ALTER COLUMN id SET DEFAULT nextval('travels_id_seq'::regclass);


--
-- TOC entry 3522 (class 2604 OID 18028)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('user_id_seq'::regclass);


--
-- TOC entry 3567 (class 2606 OID 18030)
-- Name: users USER_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);


--
-- TOC entry 3525 (class 2606 OID 39123)
-- Name: activities activity_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT activity_id PRIMARY KEY (id);


--
-- TOC entry 3571 (class 2606 OID 39133)
-- Name: activity_types activity_type_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_types
    ADD CONSTRAINT activity_type_id PRIMARY KEY (id);


--
-- TOC entry 3527 (class 2606 OID 18034)
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- TOC entry 3532 (class 2606 OID 18036)
-- Name: chat_travels chat_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels
    ADD CONSTRAINT chat_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 3535 (class 2606 OID 18038)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- TOC entry 3573 (class 2606 OID 39157)
-- Name: city_to_travels city_to_travel_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY city_to_travels
    ADD CONSTRAINT city_to_travel_id PRIMARY KEY (city_id, travel_id);


--
-- TOC entry 3537 (class 2606 OID 18040)
-- Name: comment_photos comment_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos
    ADD CONSTRAINT comment_photo_pkey PRIMARY KEY (id);


--
-- TOC entry 3539 (class 2606 OID 18042)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (id);


--
-- TOC entry 3541 (class 2606 OID 18044)
-- Name: friends friends_user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_pkey PRIMARY KEY (user_1, user_2);


--
-- TOC entry 3544 (class 2606 OID 18046)
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- TOC entry 3562 (class 2606 OID 18048)
-- Name: transports id_transport; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY transports
    ADD CONSTRAINT id_transport PRIMARY KEY (id);


--
-- TOC entry 3549 (class 2606 OID 18050)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 3551 (class 2606 OID 18052)
-- Name: movements movement_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT movement_id PRIMARY KEY (id);


--
-- TOC entry 3553 (class 2606 OID 18054)
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- TOC entry 3555 (class 2606 OID 18056)
-- Name: post_of_travels post_of_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels
    ADD CONSTRAINT post_of_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 3558 (class 2606 OID 18058)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 3560 (class 2606 OID 18060)
-- Name: states states_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_pkey PRIMARY KEY (id);


--
-- TOC entry 3564 (class 2606 OID 18062)
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- TOC entry 3569 (class 2606 OID 18064)
-- Name: user_to_travels user_to_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT user_to_travel_pkey PRIMARY KEY (travel_id, user_id);


--
-- TOC entry 3528 (class 1259 OID 18065)
-- Name: CHAT_TRAVEL_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_ID_index" ON chat_travels USING btree (id);


--
-- TOC entry 3529 (class 1259 OID 18066)
-- Name: CHAT_TRAVEL_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SENDER_ID_index" ON chat_travels USING btree (sender_id);


--
-- TOC entry 3530 (class 1259 OID 18067)
-- Name: CHAT_TRAVEL_SEND_TIME_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "CHAT_TRAVEL_SEND_TIME_index" ON chat_travels USING btree (send_time);


--
-- TOC entry 3545 (class 1259 OID 18068)
-- Name: MESSAGES_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_ID_index" ON messages USING btree (id);


--
-- TOC entry 3546 (class 1259 OID 18069)
-- Name: MESSAGES_RECIPIENT_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_RECIPIENT_ID_index" ON messages USING btree (recipient_id);


--
-- TOC entry 3547 (class 1259 OID 18070)
-- Name: MESSAGES_SENDER_ID_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "MESSAGES_SENDER_ID_index" ON messages USING btree (sender_id);


--
-- TOC entry 3556 (class 1259 OID 18071)
-- Name: ROLES_NAME_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "ROLES_NAME_uindex" ON roles USING btree (name);


--
-- TOC entry 3565 (class 1259 OID 18072)
-- Name: USER_EMAIL_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "USER_EMAIL_uindex" ON users USING btree (email);


--
-- TOC entry 3533 (class 1259 OID 18073)
-- Name: cities_name_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX cities_name_index ON cities USING btree (name);


--
-- TOC entry 3542 (class 1259 OID 39165)
-- Name: genders_gender_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX genders_gender_uindex ON genders USING btree (gender);


--
-- TOC entry 3576 (class 2606 OID 39134)
-- Name: activities activity_type_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT activity_type_fk FOREIGN KEY (activity_type_id) REFERENCES activity_types(id);


--
-- TOC entry 3580 (class 2606 OID 18075)
-- Name: albums albums_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3582 (class 2606 OID 18080)
-- Name: chat_travels chat_travel_travels_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels
    ADD CONSTRAINT chat_travel_travels_travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3583 (class 2606 OID 18085)
-- Name: chat_travels chat_travel_user_sender_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels
    ADD CONSTRAINT chat_travel_user_sender_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3586 (class 2606 OID 18090)
-- Name: cities cities_states_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_states_id_fk FOREIGN KEY (state_id) REFERENCES states(id);


--
-- TOC entry 3628 (class 2606 OID 39151)
-- Name: city_to_travels city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY city_to_travels
    ADD CONSTRAINT city_id_fk FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3578 (class 2606 OID 39182)
-- Name: activities city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT city_id_fk FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3588 (class 2606 OID 18095)
-- Name: comment_photos comment_photo_photos_photo_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos
    ADD CONSTRAINT comment_photo_photos_photo_id_fk FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- TOC entry 3589 (class 2606 OID 18100)
-- Name: comment_photos comment_photo_user_commentator_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos
    ADD CONSTRAINT comment_photo_user_commentator_id_fk FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- TOC entry 3627 (class 2606 OID 36674)
-- Name: city_to_travels country_to_travel_travel_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY city_to_travels
    ADD CONSTRAINT country_to_travel_travel_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3608 (class 2606 OID 39026)
-- Name: post_of_travels fk151t99owqybhdolsywghhnofi; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels
    ADD CONSTRAINT fk151t99owqybhdolsywghhnofi FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3629 (class 2606 OID 39167)
-- Name: city_to_travels fk27vgf7ewd7jt9ulj78r24m5x7; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY city_to_travels
    ADD CONSTRAINT fk27vgf7ewd7jt9ulj78r24m5x7 FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3597 (class 2606 OID 39001)
-- Name: messages fk4ui4nnwntodh6wjvck53dbk9m; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fk4ui4nnwntodh6wjvck53dbk9m FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3584 (class 2606 OID 38971)
-- Name: chat_travels fk6o2thecynjambda0sd3cl2v89; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels
    ADD CONSTRAINT fk6o2thecynjambda0sd3cl2v89 FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3577 (class 2606 OID 39139)
-- Name: activities fk9y4tob28y3dslhftgbcb22d94; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT fk9y4tob28y3dslhftgbcb22d94 FOREIGN KEY (activity_type_id) REFERENCES activity_types(id);


--
-- TOC entry 3581 (class 2606 OID 38966)
-- Name: albums fkcr9cmsiwsavga8s94u9vved8t; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT fkcr9cmsiwsavga8s94u9vved8t FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3623 (class 2606 OID 39051)
-- Name: user_to_travels fkcsj9t8gh2ww2w5tba929hp60x; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT fkcsj9t8gh2ww2w5tba929hp60x FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3615 (class 2606 OID 39061)
-- Name: users fkfdpp3ihbu0793wagj5qoc8mt3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkfdpp3ihbu0793wagj5qoc8mt3 FOREIGN KEY (gender) REFERENCES genders(id);


--
-- TOC entry 3605 (class 2606 OID 39021)
-- Name: photos fkfh8uqh4o1470d8jgtr2xedsip; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fkfh8uqh4o1470d8jgtr2xedsip FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3592 (class 2606 OID 39081)
-- Name: friends fkfqb57c4t8opc5pqpfei43vgx0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fkfqb57c4t8opc5pqpfei43vgx0 FOREIGN KEY (user_2) REFERENCES users(id);


--
-- TOC entry 3609 (class 2606 OID 39031)
-- Name: post_of_travels fkgl7sgv4ej2s55y7d3kf67ds45; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels
    ADD CONSTRAINT fkgl7sgv4ej2s55y7d3kf67ds45 FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3596 (class 2606 OID 38996)
-- Name: messages fkhdkwfnspwb3s60j27vpg0rpg6; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT fkhdkwfnspwb3s60j27vpg0rpg6 FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- TOC entry 3593 (class 2606 OID 39086)
-- Name: friends fkheg39l1qq9ceigdl7kqslegdx; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT fkheg39l1qq9ceigdl7kqslegdx FOREIGN KEY (user_1) REFERENCES users(id);


--
-- TOC entry 3579 (class 2606 OID 39187)
-- Name: activities fkipp4pjpx9k3tvktj15265n3q9; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT fkipp4pjpx9k3tvktj15265n3q9 FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3574 (class 2606 OID 38961)
-- Name: activities fkj8iiuiddvud69vytbqg6tcvs; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT fkj8iiuiddvud69vytbqg6tcvs FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3622 (class 2606 OID 39046)
-- Name: user_to_travels fkk9olnm97pjj9ge1npikre6qfm; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT fkk9olnm97pjj9ge1npikre6qfm FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3585 (class 2606 OID 38976)
-- Name: chat_travels fkkkuvy2jpnhont02rdgv4f8e1s; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY chat_travels
    ADD CONSTRAINT fkkkuvy2jpnhont02rdgv4f8e1s FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3601 (class 2606 OID 39011)
-- Name: movements fkkqq15a8iiyuy88l7t3xpu7t2b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT fkkqq15a8iiyuy88l7t3xpu7t2b FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3621 (class 2606 OID 39041)
-- Name: user_to_travels fkkx1h5jrtrxrlj5po0cfsjo3cd; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT fkkx1h5jrtrxrlj5po0cfsjo3cd FOREIGN KEY (user_id) REFERENCES users(id);


--
-- TOC entry 3590 (class 2606 OID 38986)
-- Name: comment_photos fkm33je21vavy0u4rr2t71v773i; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos
    ADD CONSTRAINT fkm33je21vavy0u4rr2t71v773i FOREIGN KEY (commentator_id) REFERENCES users(id);


--
-- TOC entry 3614 (class 2606 OID 39056)
-- Name: users fkn36jwt4acj3il2ixvv2c0ncco; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkn36jwt4acj3il2ixvv2c0ncco FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3591 (class 2606 OID 38991)
-- Name: comment_photos fknep6qdqfxc7kes0y5b1wupvjy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY comment_photos
    ADD CONSTRAINT fknep6qdqfxc7kes0y5b1wupvjy FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- TOC entry 3600 (class 2606 OID 39006)
-- Name: movements fkngj9op1ddi7ppk2i4ww3lu8b4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT fkngj9op1ddi7ppk2i4ww3lu8b4 FOREIGN KEY (transport_id) REFERENCES transports(id);


--
-- TOC entry 3604 (class 2606 OID 39016)
-- Name: photos fkoamp0ftyyl46e15v3inuu6ke5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT fkoamp0ftyyl46e15v3inuu6ke5 FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- TOC entry 3617 (class 2606 OID 39177)
-- Name: users fkp56c1712k691lhsyewcssf40f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkp56c1712k691lhsyewcssf40f FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3630 (class 2606 OID 39172)
-- Name: city_to_travels fkpmr7ov757locwhbmblil2ax7w; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY city_to_travels
    ADD CONSTRAINT fkpmr7ov757locwhbmblil2ax7w FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3612 (class 2606 OID 39036)
-- Name: states fkskkdphjml9vjlrqn4m5hi251y; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT fkskkdphjml9vjlrqn4m5hi251y FOREIGN KEY (country_id) REFERENCES countries(id);


--
-- TOC entry 3587 (class 2606 OID 38981)
-- Name: cities fksu54e1tlhaof4oklvv7uphsli; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT fksu54e1tlhaof4oklvv7uphsli FOREIGN KEY (state_id) REFERENCES states(id);


--
-- TOC entry 3616 (class 2606 OID 39066)
-- Name: users fkt92dgi4412ywy3u8tm9jwdya5; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT fkt92dgi4412ywy3u8tm9jwdya5 FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3594 (class 2606 OID 18290)
-- Name: friends friends_user_user_1_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_1_fk FOREIGN KEY (user_1) REFERENCES users(id);


--
-- TOC entry 3595 (class 2606 OID 18295)
-- Name: friends friends_user_user_2_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_2_fk FOREIGN KEY (user_2) REFERENCES users(id);


--
-- TOC entry 3598 (class 2606 OID 18300)
-- Name: messages messages_sender_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_sender_id_user_id_fk FOREIGN KEY (sender_id) REFERENCES users(id);


--
-- TOC entry 3599 (class 2606 OID 18305)
-- Name: messages messages_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_user_id_fk FOREIGN KEY (recipient_id) REFERENCES users(id);


--
-- TOC entry 3606 (class 2606 OID 18310)
-- Name: photos photos_albums_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_albums_id_fk FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- TOC entry 3607 (class 2606 OID 18315)
-- Name: photos photos_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3610 (class 2606 OID 18320)
-- Name: post_of_travels post_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels
    ADD CONSTRAINT post_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3611 (class 2606 OID 18325)
-- Name: post_of_travels post_of_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY post_of_travels
    ADD CONSTRAINT post_of_travel_user_id_fk FOREIGN KEY (owner_id) REFERENCES users(id);


--
-- TOC entry 3613 (class 2606 OID 18330)
-- Name: states states_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY states
    ADD CONSTRAINT states_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(id);


--
-- TOC entry 3602 (class 2606 OID 18335)
-- Name: movements transport_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT transport_id_fk FOREIGN KEY (transport_id) REFERENCES transports(id);


--
-- TOC entry 3603 (class 2606 OID 18340)
-- Name: movements travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY movements
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3575 (class 2606 OID 18345)
-- Name: activities travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activities
    ADD CONSTRAINT travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3618 (class 2606 OID 18350)
-- Name: users user_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(id);


--
-- TOC entry 3619 (class 2606 OID 18355)
-- Name: users user_genders_gender_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_genders_gender_fk FOREIGN KEY (gender) REFERENCES genders(id);


--
-- TOC entry 3620 (class 2606 OID 18360)
-- Name: users user_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT user_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3624 (class 2606 OID 18365)
-- Name: user_to_travels user_to_travel_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT user_to_travel_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 3625 (class 2606 OID 18370)
-- Name: user_to_travels user_to_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT user_to_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 3626 (class 2606 OID 18375)
-- Name: user_to_travels user_to_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY user_to_travels
    ADD CONSTRAINT user_to_travel_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id);


-- Completed on 2017-05-27 17:35:36

--
-- PostgreSQL database dump complete
--

