const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post('/checkout', async (req, res) => {
    try {
        const { products } = req.body;

        const line_items = products.map(item => ({
            price_data: {
                currency: 'LKR',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects cents
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/OrderConfirmation?success=true`,
            cancel_url: `${process.env.CLIENT_URL}/checkout?canceled=true`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
