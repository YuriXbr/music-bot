CREATE DATABASE discord;


CREATE TABLE `guildconfigurable` (
	`guildId` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`cmdPrefix` VARCHAR(10) NULL DEFAULT '!' COLLATE 'utf8mb4_0900_ai_ci',
	`modlogId` VARCHAR(100) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`guildId`) USING BTREE
)

CREATE TABLE `guilds` (
	`guildId` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`guildOwnerId` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`guildId`) USING BTREE
)

CREATE TABLE `playlists` (
	`playlistname` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`playlistlink` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`description` VARCHAR(500) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci'
)

CREATE TABLE `queuemessagetoggle` (
	`guildId` VARCHAR(256) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`chave` VARCHAR(256) NULL DEFAULT '1' COLLATE 'utf8mb4_0900_ai_ci',
	`forcar` VARCHAR(256) NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci'
)

CREATE TABLE `staffid` (
	`id` VARCHAR(50) NOT NULL DEFAULT '297905031171145751' COLLATE 'utf8mb4_0900_ai_ci',
	`dj` TINYINT(1) NOT NULL DEFAULT '0',
	`permissionlevel` VARCHAR(50) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`note` VARCHAR(50) NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)