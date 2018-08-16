### Schema

CREATE DATABASE chuanr_db;
USE chuanr_db;

CREATE TABLE chuanr
(
	id int NOT NULL AUTO_INCREMENT,
	chuanrtype varchar(255) NOT NULL,
	-- howmany INT(5) DEFAULT 1,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
