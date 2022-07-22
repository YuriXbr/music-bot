CREATE DATABASE discord;


CREATE TABLE Guilds (
        guildId         VARCHAR(100)        NOT             NULL        PRIMARY KEY,
        guildOwnerId    VARCHAR(100)        NOT             NULL
);

CREATE TABLE GuildConfigurable (
        guildId         VARCHAR(100)        NOT             NULL        PRIMARY KEY,
        cmdPrefix       VARCHAR(10)         DEFAULT '!',    
        modlogId        VARCHAR(100)
);

CREATE TABLE `playlists` (
	playlistname    TEXT                NULL            DEFAULT     NULL,
	playlistlink    TEXT                NULL            DEFAULT     NULL 
);
