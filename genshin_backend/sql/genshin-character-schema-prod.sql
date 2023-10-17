drop database if exists genshin_character;
create database genshin_character;
use genshin_character;

-- create tables and relationships
create table collection (
    collection_id int primary key auto_increment
);


create table character (
    character_id int primary key auto_increment,
    name varchar(50) not null,
    weapon varchar(50) null,
    vision varchar(50) not null
);

create table collection_character (
    collection_id int not null,
    character_id int not null,
    constraint pk_collection_character
        primary key (collection_id, character_id),
    constraint fk_collection_character_collection_id
        foreign key (collection_id)
        references collection(collection_id),
    constraint fk_collection_character_character_id
        foreign key (character_id)
        references character(character_id),
    constraint uq_collection_character_identifier_collection_id
        unique (identifier, collection_id)
);

insert into character
		(name, weapon, vision)
	values
		('TestName','TestWeapon','TestVision'),
		('Eleizaybet','Sword','Water');
