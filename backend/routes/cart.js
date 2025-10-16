import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// 🧠 Get all cart items
router.get("/", async (req, res) => {
  try {
    const cart = await prisma.cartItem.findMany({
      include: { product: true },
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

// ➕ Add item to cart
router.post("/", async (req, res) => {
  const { productId } = req.body;

  try {
    const existing = await prisma.cartItem.findFirst({ where: { productId } });

    if (existing) {
      // If item exists, increment quantity
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + 1 },
        include: { product: true },
      });
      return res.json(updated);
    } else {
      // Else create a new item
      const newItem = await prisma.cartItem.create({
        data: { productId, quantity: 1 },
        include: { product: true },
      });
      return res.json(newItem);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
});

// ➖ Remove one quantity (or delete if 0)
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const item = await prisma.cartItem.findUnique({ where: { id } });
    if (!item) return res.status(404).json({ error: "Item not found" });

    if (item.quantity > 1) {
      const updated = await prisma.cartItem.update({
        where: { id },
        data: { quantity: item.quantity - 1 },
        include: { product: true },
      });
      res.json(updated);
    } else {
      await prisma.cartItem.delete({ where: { id } });
      res.json({ message: "Item removed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item" });
  }
});

// 🚮 Clear entire cart
router.delete("/clear-all", async (req, res) => {
  try {
    await prisma.cartItem.deleteMany();
    res.json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

export default router;