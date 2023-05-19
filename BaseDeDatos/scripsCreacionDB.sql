-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ipngirlshopdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ipngirlshopdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ipngirlshopdb` DEFAULT CHARACTER SET utf8mb3 ;
USE `ipngirlshopdb` ;

-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`categorias` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`descuento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`descuento` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descuento` DOUBLE NOT NULL,
  `estado` BIT(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`productos` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(250) NULL DEFAULT NULL,
  `precio` DOUBLE NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `cantidad` INT NULL DEFAULT NULL,
  `categorias_id` BIGINT NOT NULL,
  `descuento_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`, `categorias_id`, `descuento_id`),
  INDEX `fk_productos_categorias_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_productos_descuento1_idx` (`descuento_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`usuarios` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  `boleta` VARCHAR(255) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(255) NULL DEFAULT NULL,
  `rol` VARCHAR(45) NULL DEFAULT NULL,
  `foto` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
