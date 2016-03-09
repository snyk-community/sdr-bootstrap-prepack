-- password field value is encoded and equals to 'password' word
insert into user_profile(username, password, authorities) values('user', '$2a$10$s7mHBEWtI8ZFhPLGhC6HQOawTj8L6tAEifAgJ2BTtDDAFIIfLHYG.', 'USER');
insert into user_profile(username, password, authorities) values('admin', '$2a$10$s7mHBEWtI8ZFhPLGhC6HQOawTj8L6tAEifAgJ2BTtDDAFIIfLHYG.', 'ADMIN');
