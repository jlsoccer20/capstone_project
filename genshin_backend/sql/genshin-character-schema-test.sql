drop database if exists genshin_character_test;
create database genshin_character_test;
use genshin_character_test;

-- create tables and relationships
create table collection (
    collection_id int primary key auto_increment,
    name varchar(25) not null,
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
        references character(character_id)
);

delimiter //
create procedure set_known_good_state()
begin

    delete from collection_character;
	delete from collection;
	alter table collection auto_increment = 1;
    delete from character;
    alter table character auto_increment = 1;

    insert into collection(collection_id, name) values
        (1, 'ACME'),
        (2, 'MASK'),
        (3, 'ODIN');

	insert into character
		(name, weapon, vision)
	values
		('Hazel','C','Sauven'),
		('Claudian','C','O'),
		('Winn','V','Puckrin'),
		('Kiab','U','Whitham'),
		('Min','E','Dearle'),
		('Urban','H','Carwithen'),
		('Ulises','B','Muhammad'),
		('Phylys','Y','Howitt');

	insert into collection_character
		(collection_id, character_id, identifier, security_clearance_id, activation_date)
    select
        collection.collection_id,                              -- collection_id
        character.character_id                                -- character_id
    from collection
    inner join character
    where character.character_id not in (6, 8)
    and collection.collection_id != 2;

end //
-- 4. Change the statement terminator back to the original.
delimiter ;
