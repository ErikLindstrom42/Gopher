USE [master]
GO

IF db_id('Gopher') IS NULL
  CREATE DATABASE Gopher
GO

USE [Gopher]
GO


DROP TABLE IF EXISTS [Fox];
GO 


CREATE TABLE [Fox] (
  [Id] INTEGER IDENTITY PRIMARY KEY NOT NULL,
  [Image] NVARCHAR(255) NOT NULL,
  [Link] NVARCHAR(255) NOT NULL
)




SET IDENTITY_INSERT [Fox] ON
INSERT INTO [Fox]
  ([Id], [Image], [Link])
VALUES 
  (1, 'https:\/\/randomfox.ca\/images\/17.jpg', 'https:\/\/randomfox.ca\/?i=17'),
  (2, 'https:\/\/randomfox.ca\/images\/97.jpg', 'https:\/\/randomfox.ca\/?i=97'), 
  (3, 'https:\/\/randomfox.ca\/images\/106.jpg', 'https:\/\/randomfox.ca\/?i=106'), 
  (4, 'https:\/\/randomfox.ca\/images\/73.jpg', 'https:\/\/randomfox.ca\/?i=73'), 
  (5, 'https:\/\/randomfox.ca\/images\/10.jpg', 'https:\/\/randomfox.ca\/?i=10');
SET IDENTITY_INSERT [Fox] OFF
  

