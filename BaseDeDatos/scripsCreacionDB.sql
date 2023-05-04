-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ipngirlshopdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ipngirlshopdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ipngirlshopdb` DEFAULT CHARACTER SET utf8 ;
USE `ipngirlshopdb` ;

-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `apellido` VARCHAR(100) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  `boleta` LONGTEXT NOT NULL,
  `correo` VARCHAR(45) NULL,
  `telefono` INT(10) NULL,
  `rol` VARCHAR(45) NULL,
  `foto` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ipngirlshopdb`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ipngirlshopdb`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `descripcion` VARCHAR(250) NULL,
  `precio` FLOAT NOT NULL,
  `imagen` LONGTEXT NOT NULL,
  `cantidad` INT NULL,
  `categorias_id` INT NOT NULL,
   PRIMARY KEY (`id`))
  ENGINE = InnoDB;

