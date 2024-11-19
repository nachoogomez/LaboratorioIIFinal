import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//get all products
export const getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
      } catch (error) {
        res.status(500).json({ error: 'No se pudieron obtener los productos' });
      }
    };

//create a product
export const createProduct = async (req, res) => {
    const { name, price, description } = req.body;
    try {
      const product = await prisma.product.create({
        data: { name, price, description },
      });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'No se pudo crear el producto' });
    }
};

//delete a product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el producto' });
  }
}

//update a product

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price, description },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar el producto' });
  }
}