create database games;
use games;

create table systemGame (
  idSystem int auto_increment not null,
  nameSystem varchar(255) not null,
  primary key (idSystem)
);

create table platforms (
  idPlatforms int auto_increment not null,
  namePlatforms  varchar(255) not null,
  primary key (idPlatforms)
);

create table genders (
  idGenders int auto_increment not null,
  nameGenders varchar(255) not null,
  primary key (idGenders)
);

create table game (
  idGame int auto_increment not null,
  idSystem int not null,
  idPlatforms int not null,
  idGenders int not null,
  nameGame varchar(255) not null,
  cost float not null,
  primary key (idGame),
  foreign key (idSystem) references systemGame(idSystem),
  foreign key (idPlatforms) references platforms(idPlatforms),
  foreign key (idGenders) references genders(idGenders)
);

create table level (
  idLevel int auto_increment not null,
  nameLevel varchar(255) not null,
  primary key (idLevel)
);

create table userInfo (
  idUser int auto_increment not null,
  idLevel int not null,
  nameUser varchar(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  primary key (idUser),
  foreign key (idLevel) references level(idLevel)
);

create table sale (
  idSale int auto_increment not null,
  idUser int not null, 
  numFac varchar (255) not null,
  dataSale date not null,
  primary key (idSale),
  foreign key (idUser) references userInfo(idUser)
);

create table detail (
  idDetail int auto_increment not null,
  idSale int not null,
  idGame int not null,
  amount int not null,
  discount int not null,
  primary key (idDetail),
  foreign key (idSale) references sale(idSale),
  foreign key (idGame) references game (idGame)
);