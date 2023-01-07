-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurantapp
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu_products`
--

DROP TABLE IF EXISTS `menu_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_plato` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `ingredientes` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `preparacion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `img` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
  `categoria_id` int NOT NULL,
  `img_detail` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_menu_products_menu_categories` (`categoria_id`),
  CONSTRAINT `FK_menu_products_menu_categories` FOREIGN KEY (`categoria_id`) REFERENCES `menu_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_products`
--

LOCK TABLES `menu_products` WRITE;
/*!40000 ALTER TABLE `menu_products` DISABLE KEYS */;
INSERT INTO `menu_products` VALUES (1,'Arroz con Pollo','Arroz, Culantro, Tomate, Sal, Limon, Entre Otros','El arroz con pollo es un plato típico de América Latina y España 1​ con variaciones regionales según el país. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras (ají pimentón, zanahoria en cubos, apio, habichuelas, cebolla, maíz desgranado, aceitunas, arvejas, alcaparras), y sazonado con especias (laurel, tomillo, cilantro, ajo)','https://www.goya.com/media/8029/cheesy-chicken-and-yellow-rice.jpg?quality=80',2,'https://www.acozykitchen.com/wp-content/uploads/2011/12/ArrozconPollo-5.jpg',NULL),(2,'Caldo de gallina','Fideos, Kion, Ajos, Gallina','El caldo de pollo (denominado a veces como sopa de pollo o caldo de gallina) es una sopa.1​ A menudo se sirve con trozos de carne o con granos de arroz o cebada, pasta, zanahoria, papa amarilla, apio, cebolla blanca, etc.2​ Se considera también un remedio casero curativo contra los enfriamientos y los catarros y la rinitis.','https://st1.uvnimg.com/6f/66/81899fb14bf987dc47bd34af6e1d/41a242b718034034b1ed5b3de67d20c4',4,'https://acomer.pe/wp-content/uploads/2016/06/caldodegallinafb.jpg',NULL),(3,'Hamburgesas','Carne, Papas Fritas, Lechuga, Tomate','Una hamburguesa es un sándwich hecho a base de carne molida o de origen vegetal,1​ aglutinada en forma de filete cocinado a la parrilla o a la plancha, aunque también puede freírse u hornearse. Fuera del ámbito de habla hispana, es más común encontrar la denominación estadounidense burger, acortamiento de hamburger. Se presenta en un pan ligero partido en dos que posee forma de óvalo. Suele estar acompañada de aros de cebolla, hojas de lechuga, alguna rodaja de tomate, láminas de encurtidos y papas fritas. Se suele aliñar con algún condimento, como puede ser la salsa de tomate (o kétchup), la mostaza, el relish, o la mayonesa, entre otro','https://fondosmil.com/fondo/75572.jpg',3,'https://www.haseimglueck.de/wp-content/uploads/2016/05/04-Zucchini-Kichererbsen-Burger-02_6161-256x384.jpg',NULL),(4,'Salchipapa','Hot dog, Papas, Lechuga, Tomate, Cremas','Es un plato de comida callejera hecho a base de salchichas y papas acompañados de alguna salsa. Muy sencillo y perfecto para comer de pie en la calle luego de unas cervezas.','https://www.peru.travel/Contenido/General/Imagen/es/550/1.1/salchipapa-portada.jpg',3,'https://i.pinimg.com/474x/9f/23/d3/9f23d3502133c8a04b8167e5c953858d--caribbean-food-chips.jpg',NULL),(5,'Pollo a la brasa','Pollo, Pimienta, Comino, Papas, Lechuga','Sí bueno, el pollo a la brasa existe en todos lados y se prepara más o menos igual siempre. Pero es que en Perú te lo sirven con una salsa de ají amarillo que es para volverse loco de amor. De verdad, si estás en Perú, cena pollo en brasas un día.','https://cloudfront-us-east-1.images.arcpublishing.com/infobae/XJUK3ICYVBDP5AZHS5DULVYY24.jpg',2,'https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-1.4-de-Pollo-a-la-Brasa.png',NULL),(6,'Arroz Chaufa','Arroz, Sillao, Kion, Pollo en Trozos, Huevo','Consiste en un arroz frito con verduras, que generalmente incluye cebolletas, huevos y pollo, cocinado rápidamente a fuego alto, a menudo en un wok y aderezado con salsa de soja y aceite.1​ Se deriva de la cocina china debido a la afluencia de inmigrantes chinos al Perú a finales del siglo XIX.3​ La persona especializada en la elaboración del arroz chaufa recibe el nombre de «chaufero».4​','https://www.peru.travel/Contenido/General/Imagen/es/543/1.1/arroz-chaufa.jpg',2,'https://tofuu.getjusto.com/orioneat-local/resized2/mJW4QvBN3EDJ8qkwx-1200-1200.webp',NULL),(7,'Sandiwch de Pollo y Tocino','Pan tostado, Huevo, Lechuga, Palta, Tocino, Pollo','El sándwich de pollo1​ o emparedado de pollo es una variedad de comida rápida que consiste en pechuga de pollo deshuesada y sin piel, sobre un bollo de hamburguesa, acompañado de condimentos y guarniciones.','https://truffle-assets.imgix.net/e2b85096-sandwich-de-pollo-y-tocino_l_thumb.png',4,'https://bimbo-com-mx-assets.s3.amazonaws.com/s3fs-public/styles/recipe_detail/public/recipe/Receta-Sandwich-de-pollo-a-la-mostaza-Bimbo.jpg?itok=8oHVYOQZ',NULL);
/*!40000 ALTER TABLE `menu_products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-06 23:50:24
