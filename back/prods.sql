-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 20 2022 г., 20:34
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `eshop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `prods`
--

CREATE TABLE `prods` (
  `id` int NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descr` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cost` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `prods`
--

INSERT INTO `prods` (`id`, `name`, `url`, `descr`, `cost`) VALUES
(1, 'товар_А', 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 200),
(2, 'товар_Б', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'краткое описание', 300),
(3, 'товар_В', 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'краткое описание', 500),
(4, 'товар_Г', 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'краткое описание', 100),
(5, 'товар_Д', 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 200),
(6, 'товар_Е', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 150),
(7, 'товар_Ж', 'https://images.unsplash.com/photo-1525904097878-94fb15835963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'краткое описаине', 300),
(8, 'товар_З', 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 200),
(9, 'товар_И', 'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое опиваине', 500),
(10, 'товар_К', 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 700),
(11, 'товар_Л', 'https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 200),
(12, 'товар_М', 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 400),
(13, 'товар_Н', 'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описаине', 300),
(14, 'товар_О', 'https://images.unsplash.com/photo-1548100721-15f0e76035c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 350),
(15, 'товар_П', 'https://images.unsplash.com/photo-1641390323814-b6720f65dee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 450),
(16, 'товар_Р', 'https://images.unsplash.com/photo-1591892014172-8a9b511165b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 600),
(17, 'товар_С', 'https://images.unsplash.com/photo-1597994421076-c716556dd10a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2R1Y3RzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'краткое описание', 1200);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `prods`
--
ALTER TABLE `prods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `prods`
--
ALTER TABLE `prods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
