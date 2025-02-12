create table contactos(
id serial not null primary key,
nombre varchar(50) not null,
apellido varchar(50) not null,
telefono varchar(10) not null,
email varchar(50) not null
)

drop table contactos
select * from contactos
SELECT * FROM contactos

insert into contactos (nombre, apellido, telefono, email)
values('Marco', 'Zambrano', 0995589745,'marco@gmail.com'),
('Karen', 'Torres', 0125987452,'karen@gmail.com'),
('Camila', 'Casa', 0998745236,'camila@gmail.com')