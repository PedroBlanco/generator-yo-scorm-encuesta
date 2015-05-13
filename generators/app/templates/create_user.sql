CREATE USER `<%= DB_USER %>`@`<%= DB_HOST %>` IDENTIFIED BY '<%= DB_PASS %>';
GRANT INSERT ON TABLE `<%= DB_NAME %>`.`<%= DB_TABLE %>` TO `<%= DB_USER %>`@`<%= DB_HOST %>`;
