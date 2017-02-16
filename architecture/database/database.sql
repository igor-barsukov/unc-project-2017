--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

-- Started on 2017-02-16 09:35:56 MSK

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
-- TOC entry 2561 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 185 (class 1259 OID 33353)
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
-- TOC entry 186 (class 1259 OID 33359)
-- Name: USER_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "USER_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2562 (class 0 OID 0)
-- Dependencies: 186
-- Name: USER_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "USER_id_seq" OWNED BY "user".id;


--
-- TOC entry 187 (class 1259 OID 33361)
-- Name: albums; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE albums (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    create_date date NOT NULL,
    description text,
    travel_id integer NOT NULL
);


--
-- TOC entry 188 (class 1259 OID 33367)
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE albums_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2563 (class 0 OID 0)
-- Dependencies: 188
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE albums_id_seq OWNED BY albums.id;


--
-- TOC entry 189 (class 1259 OID 33369)
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
-- TOC entry 190 (class 1259 OID 33375)
-- Name: chat_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE chat_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2564 (class 0 OID 0)
-- Dependencies: 190
-- Name: chat_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE chat_travel_id_seq OWNED BY chat_travel.id;


--
-- TOC entry 191 (class 1259 OID 33377)
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE cities (
    citi_id integer NOT NULL,
    name character varying(50) NOT NULL,
    country_id integer NOT NULL
);


--
-- TOC entry 192 (class 1259 OID 33380)
-- Name: cities_citi_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE cities_citi_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2565 (class 0 OID 0)
-- Dependencies: 192
-- Name: cities_citi_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE cities_citi_id_seq OWNED BY cities.citi_id;


--
-- TOC entry 193 (class 1259 OID 33382)
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
-- TOC entry 194 (class 1259 OID 33388)
-- Name: comment_photo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE comment_photo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2566 (class 0 OID 0)
-- Dependencies: 194
-- Name: comment_photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE comment_photo_id_seq OWNED BY comment_photo.id;


--
-- TOC entry 195 (class 1259 OID 33390)
-- Name: countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE countries (
    country_id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- TOC entry 196 (class 1259 OID 33393)
-- Name: countries_country_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE countries_country_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2567 (class 0 OID 0)
-- Dependencies: 196
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE countries_country_id_seq OWNED BY countries.country_id;


--
-- TOC entry 197 (class 1259 OID 33395)
-- Name: friends; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE friends (
    id integer NOT NULL,
    user_1 integer NOT NULL,
    user_2 integer NOT NULL
);


--
-- TOC entry 198 (class 1259 OID 33398)
-- Name: friends_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE friends_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2568 (class 0 OID 0)
-- Dependencies: 198
-- Name: friends_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE friends_id_seq OWNED BY friends.id;


--
-- TOC entry 214 (class 1259 OID 33638)
-- Name: genders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE genders (
    id integer NOT NULL,
    gender character varying(10) NOT NULL
);


--
-- TOC entry 213 (class 1259 OID 33636)
-- Name: genders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE genders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2569 (class 0 OID 0)
-- Dependencies: 213
-- Name: genders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE genders_id_seq OWNED BY genders.id;


--
-- TOC entry 199 (class 1259 OID 33400)
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
-- TOC entry 200 (class 1259 OID 33406)
-- Name: messages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2570 (class 0 OID 0)
-- Dependencies: 200
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE messages_id_seq OWNED BY messages.id;


--
-- TOC entry 201 (class 1259 OID 33408)
-- Name: photos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE photos (
    id integer NOT NULL,
    album_id integer NOT NULL,
    owner_id integer NOT NULL,
    path_to_photo character varying(100) NOT NULL
);


--
-- TOC entry 202 (class 1259 OID 33411)
-- Name: photos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE photos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2571 (class 0 OID 0)
-- Dependencies: 202
-- Name: photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE photos_id_seq OWNED BY photos.id;


--
-- TOC entry 203 (class 1259 OID 33413)
-- Name: plans_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE plans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 204 (class 1259 OID 33415)
-- Name: plans; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE plans (
    id integer DEFAULT nextval('plans_id_seq'::regclass) NOT NULL,
    name character varying(100) NOT NULL,
    travel_id integer NOT NULL,
    start_date date NOT NULL,
    end_date date,
    info text,
    city_id integer,
    is_active boolean NOT NULL,
    latitude character varying(10),
    longitude character varying(10)
);


--
-- TOC entry 205 (class 1259 OID 33422)
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
-- TOC entry 206 (class 1259 OID 33428)
-- Name: post_of_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE post_of_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2572 (class 0 OID 0)
-- Dependencies: 206
-- Name: post_of_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE post_of_travel_id_seq OWNED BY post_of_travel.id;


--
-- TOC entry 207 (class 1259 OID 33430)
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE roles (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- TOC entry 208 (class 1259 OID 33433)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2573 (class 0 OID 0)
-- Dependencies: 208
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- TOC entry 209 (class 1259 OID 33435)
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
-- TOC entry 210 (class 1259 OID 33441)
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE travels_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2574 (class 0 OID 0)
-- Dependencies: 210
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE travels_id_seq OWNED BY travels.id;


--
-- TOC entry 211 (class 1259 OID 33443)
-- Name: user_to_travel; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE user_to_travel (
    id integer NOT NULL,
    user_id integer NOT NULL,
    travel_id integer NOT NULL,
    role_id integer NOT NULL
);


--
-- TOC entry 212 (class 1259 OID 33446)
-- Name: user_to_travel_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE user_to_travel_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2575 (class 0 OID 0)
-- Dependencies: 212
-- Name: user_to_travel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE user_to_travel_id_seq OWNED BY user_to_travel.id;


--
-- TOC entry 2360 (class 2604 OID 33449)
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY albums ALTER COLUMN id SET DEFAULT nextval('albums_id_seq'::regclass);


--
-- TOC entry 2361 (class 2604 OID 33450)
-- Name: chat_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel ALTER COLUMN id SET DEFAULT nextval('chat_travel_id_seq'::regclass);


--
-- TOC entry 2362 (class 2604 OID 33451)
-- Name: cities citi_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities ALTER COLUMN citi_id SET DEFAULT nextval('cities_citi_id_seq'::regclass);


--
-- TOC entry 2363 (class 2604 OID 33452)
-- Name: comment_photo id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo ALTER COLUMN id SET DEFAULT nextval('comment_photo_id_seq'::regclass);


--
-- TOC entry 2364 (class 2604 OID 33453)
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY countries ALTER COLUMN country_id SET DEFAULT nextval('countries_country_id_seq'::regclass);


--
-- TOC entry 2365 (class 2604 OID 33454)
-- Name: friends id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY friends ALTER COLUMN id SET DEFAULT nextval('friends_id_seq'::regclass);


--
-- TOC entry 2373 (class 2604 OID 33641)
-- Name: genders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY genders ALTER COLUMN id SET DEFAULT nextval('genders_id_seq'::regclass);


--
-- TOC entry 2366 (class 2604 OID 33455)
-- Name: messages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages ALTER COLUMN id SET DEFAULT nextval('messages_id_seq'::regclass);


--
-- TOC entry 2367 (class 2604 OID 33456)
-- Name: photos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq'::regclass);


--
-- TOC entry 2369 (class 2604 OID 33457)
-- Name: post_of_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel ALTER COLUMN id SET DEFAULT nextval('post_of_travel_id_seq'::regclass);


--
-- TOC entry 2370 (class 2604 OID 33458)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- TOC entry 2371 (class 2604 OID 33459)
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY travels ALTER COLUMN id SET DEFAULT nextval('travels_id_seq'::regclass);


--
-- TOC entry 2359 (class 2604 OID 33448)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user" ALTER COLUMN id SET DEFAULT nextval('"USER_id_seq"'::regclass);


--
-- TOC entry 2372 (class 2604 OID 33460)
-- Name: user_to_travel id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel ALTER COLUMN id SET DEFAULT nextval('user_to_travel_id_seq'::regclass);


--
-- TOC entry 2376 (class 2606 OID 33462)
-- Name: user USER_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT "USER_pkey" PRIMARY KEY (id);


--
-- TOC entry 2378 (class 2606 OID 33464)
-- Name: albums albums_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_pkey PRIMARY KEY (id);


--
-- TOC entry 2383 (class 2606 OID 33466)
-- Name: chat_travel chat_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 2386 (class 2606 OID 33468)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (citi_id);


--
-- TOC entry 2388 (class 2606 OID 33470)
-- Name: comment_photo comment_photo_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_pkey PRIMARY KEY (id);


--
-- TOC entry 2390 (class 2606 OID 33472)
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- TOC entry 2392 (class 2606 OID 33474)
-- Name: friends friends_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_pkey PRIMARY KEY (id);


--
-- TOC entry 2415 (class 2606 OID 33643)
-- Name: genders genders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY genders
    ADD CONSTRAINT genders_pkey PRIMARY KEY (id);


--
-- TOC entry 2399 (class 2606 OID 33476)
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- TOC entry 2401 (class 2606 OID 33478)
-- Name: photos photos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


--
-- TOC entry 2403 (class 2606 OID 33480)
-- Name: plans plans_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);


--
-- TOC entry 2405 (class 2606 OID 33482)
-- Name: post_of_travel post_of_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 2408 (class 2606 OID 33484)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 2410 (class 2606 OID 33486)
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- TOC entry 2412 (class 2606 OID 33488)
-- Name: user_to_travel user_to_travel_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_pkey PRIMARY KEY (id);


--
-- TOC entry 2379 (class 1259 OID 33489)
-- Name: CHAT_TRAVEL_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_ID_index" ON chat_travel USING btree (id);


--
-- TOC entry 2380 (class 1259 OID 33490)
-- Name: CHAT_TRAVEL_SENDER_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_SENDER_ID_index" ON chat_travel USING btree (sender_id);


--
-- TOC entry 2381 (class 1259 OID 33491)
-- Name: CHAT_TRAVEL_SEND_TIME_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "CHAT_TRAVEL_SEND_TIME_index" ON chat_travel USING btree (send_time);


--
-- TOC entry 2384 (class 1259 OID 33492)
-- Name: CITIES_NAME_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "CITIES_NAME_uindex" ON cities USING btree (name);


--
-- TOC entry 2395 (class 1259 OID 33493)
-- Name: MESSAGES_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_ID_index" ON messages USING btree (id);


--
-- TOC entry 2396 (class 1259 OID 33494)
-- Name: MESSAGES_RECIPIENT_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_RECIPIENT_ID_index" ON messages USING btree (recipient_id);


--
-- TOC entry 2397 (class 1259 OID 33495)
-- Name: MESSAGES_SENDER_ID_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "MESSAGES_SENDER_ID_index" ON messages USING btree (sender_id);


--
-- TOC entry 2406 (class 1259 OID 33496)
-- Name: ROLES_NAME_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "ROLES_NAME_uindex" ON roles USING btree (name);


--
-- TOC entry 2374 (class 1259 OID 33497)
-- Name: USER_EMAIL_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "USER_EMAIL_uindex" ON "user" USING btree (email);


--
-- TOC entry 2393 (class 1259 OID 33498)
-- Name: friends_user_1_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX friends_user_1_index ON friends USING btree (user_1);


--
-- TOC entry 2394 (class 1259 OID 33499)
-- Name: friends_user_2_index; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX friends_user_2_index ON friends USING btree (user_2);


--
-- TOC entry 2413 (class 1259 OID 33644)
-- Name: genders_gender_uindex; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX genders_gender_uindex ON genders USING btree (gender);


--
-- TOC entry 2419 (class 2606 OID 33500)
-- Name: albums albums_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY albums
    ADD CONSTRAINT albums_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2420 (class 2606 OID 33606)
-- Name: chat_travel chat_travel_travels_travel_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_travels_travel_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2421 (class 2606 OID 33611)
-- Name: chat_travel chat_travel_user_sender_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY chat_travel
    ADD CONSTRAINT chat_travel_user_sender_id_fk FOREIGN KEY (sender_id) REFERENCES "user"(id);


--
-- TOC entry 2422 (class 2606 OID 33515)
-- Name: cities cities_countries_country_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY cities
    ADD CONSTRAINT cities_countries_country_id_fk FOREIGN KEY (country_id) REFERENCES countries(country_id);


--
-- TOC entry 2423 (class 2606 OID 33616)
-- Name: comment_photo comment_photo_photos_photo_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_photos_photo_id_fk FOREIGN KEY (photo_id) REFERENCES photos(id);


--
-- TOC entry 2424 (class 2606 OID 33621)
-- Name: comment_photo comment_photo_user_commentator_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY comment_photo
    ADD CONSTRAINT comment_photo_user_commentator_id_fk FOREIGN KEY (commentator_id) REFERENCES "user"(id);


--
-- TOC entry 2425 (class 2606 OID 33626)
-- Name: friends friends_user_user_1_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_1_fk FOREIGN KEY (user_1) REFERENCES "user"(id);


--
-- TOC entry 2426 (class 2606 OID 33631)
-- Name: friends friends_user_user_2_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY friends
    ADD CONSTRAINT friends_user_user_2_fk FOREIGN KEY (user_2) REFERENCES "user"(id);


--
-- TOC entry 2427 (class 2606 OID 33540)
-- Name: messages messages_sender_id_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_sender_id_user_id_fk FOREIGN KEY (sender_id) REFERENCES "user"(id);


--
-- TOC entry 2428 (class 2606 OID 33545)
-- Name: messages messages_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY messages
    ADD CONSTRAINT messages_user_id_fk FOREIGN KEY (recipient_id) REFERENCES "user"(id);


--
-- TOC entry 2429 (class 2606 OID 33550)
-- Name: photos photos_albums_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_albums_id_fk FOREIGN KEY (album_id) REFERENCES albums(id);


--
-- TOC entry 2430 (class 2606 OID 33555)
-- Name: photos photos_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY photos
    ADD CONSTRAINT photos_user_id_fk FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- TOC entry 2431 (class 2606 OID 33560)
-- Name: plans plans_cities_citi_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY plans
    ADD CONSTRAINT plans_cities_citi_id_fk FOREIGN KEY (city_id) REFERENCES cities(citi_id);


--
-- TOC entry 2432 (class 2606 OID 33565)
-- Name: plans plans_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY plans
    ADD CONSTRAINT plans_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2433 (class 2606 OID 33570)
-- Name: post_of_travel post_of_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2434 (class 2606 OID 33575)
-- Name: post_of_travel post_of_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY post_of_travel
    ADD CONSTRAINT post_of_travel_user_id_fk FOREIGN KEY (owner_id) REFERENCES "user"(id);


--
-- TOC entry 2416 (class 2606 OID 33580)
-- Name: user user_cities_city_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_cities_city_id_fk FOREIGN KEY (city_id) REFERENCES cities(citi_id);


--
-- TOC entry 2418 (class 2606 OID 33653)
-- Name: user user_genders_gender_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_genders_gender_fk FOREIGN KEY (gender) REFERENCES genders(id);


--
-- TOC entry 2417 (class 2606 OID 33585)
-- Name: user user_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_roles_id_fk FOREIGN KEY (id_role) REFERENCES roles(id);


--
-- TOC entry 2435 (class 2606 OID 33590)
-- Name: user_to_travel user_to_travel_roles_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_roles_id_fk FOREIGN KEY (role_id) REFERENCES roles(id);


--
-- TOC entry 2436 (class 2606 OID 33595)
-- Name: user_to_travel user_to_travel_travels_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_travels_id_fk FOREIGN KEY (travel_id) REFERENCES travels(id);


--
-- TOC entry 2437 (class 2606 OID 33600)
-- Name: user_to_travel user_to_travel_user_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY user_to_travel
    ADD CONSTRAINT user_to_travel_user_id_fk FOREIGN KEY (user_id) REFERENCES "user"(id);


-- Completed on 2017-02-16 09:35:57 MSK

--
-- PostgreSQL database dump complete
--

