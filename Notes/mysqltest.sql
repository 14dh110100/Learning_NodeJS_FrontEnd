
create table App_User (
	Id int(11),
    Username char(64),
    Password char(64)
);

insert into App_User (Id, Username, Password)
value (1, 'user1', '1');

select * from App_User