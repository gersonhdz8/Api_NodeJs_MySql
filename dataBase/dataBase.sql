CREATE DATABASE  prueba_backend;

USE prueba_backend;

CREATE TABLE bodegas(
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    id_responsable BIGINT(20) UNSIGNED,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    updated_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE historiales(
    id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cantidad INT(11) NOT NULL,
    id_bodega_origen BIGINT(20) UNSIGNED,
    id_bodega_destino BIGINT(20) UNSIGNED,
    id_inventario BIGINT(20) UNSIGNED,
    created_by BIGINT(20) UNSIGNED,
    updated_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE inventarios(
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_bodega BIGINT(20) UNSIGNED,
    id_producto BIGINT(20) UNSIGNED,
    cantidad INT(11) NOT NULL,
    created_by BIGINT(20) UNSIGNED,
    updated_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos(
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    descripcion VARCHAR(255),
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    updated_by BIGINT(20) UNSIGNED,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    email_verified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED,
    updated_by BIGINT(20) UNSIGNED,
    foto VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE bodegas
ADD CONSTRAINT fk_users_bodegas FOREIGN KEY (id_responsable) REFERENCES users(id);
ALTER TABLE bodegas
ADD CONSTRAINT fk_users_bodegas_created FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE bodegas
ADD CONSTRAINT fk_users_bodegas_update FOREIGN KEY (updated_by) REFERENCES users(id);

ALTER TABLE historiales
ADD CONSTRAINT fk_historiales_bodegas_origen FOREIGN KEY (id_bodega_origen) REFERENCES bodegas(id);
ALTER TABLE historiales
ADD CONSTRAINT fk_historiales_bodegas_destino FOREIGN KEY (id_bodega_destino) REFERENCES bodegas(id);
ALTER TABLE historiales
ADD CONSTRAINT fk_historiales_users_created FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE historiales
ADD CONSTRAINT fk_historiales_users_update FOREIGN KEY (updated_by) REFERENCES users(id);
ALTER TABLE historiales
ADD CONSTRAINT fk_historiales_inventario FOREIGN KEY (id_inventario) REFERENCES inventarios(id);
ALTER TABLE inventarios
ADD CONSTRAINT fk_inventarios_bodegas FOREIGN KEY (id_bodega) REFERENCES bodegas(id);
ALTER TABLE inventarios
ADD CONSTRAINT fk_inventarios_users_created FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE inventarios
ADD CONSTRAINT fk_inventarios_users_by FOREIGN KEY (updated_by) REFERENCES users(id);
ALTER TABLE inventarios
ADD CONSTRAINT fk_inventarios_productos FOREIGN KEY (id_producto) REFERENCES productos(id);
ALTER TABLE productos
ADD CONSTRAINT fk_productos_created_users FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE productos
ADD CONSTRAINT fk_productos_update_users FOREIGN KEY (updated_by) REFERENCES users(id);




