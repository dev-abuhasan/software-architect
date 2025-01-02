User -> 
    AddToCart -> IMPORTANT: [location,]
        localStorage -> 
            {   
                coupon: NEW_USER,
                discount_total: 100,
                discounted_subtotal: 100,
                payable_subtotal: 425,
                payable_amount: 325,
                promotions: [
                    {
                        type: first_order_discount,
                        amount: 50,
                        text: First Order Discount Applied
                    },
                    {
                        type: cashback,
                        amount: 20,
                        text: Cashback Earned
                    }
                ],
                deliveryOption:[
                    {
                        amount: 30,
                        disabled: 0 | 1
                        type: regular
                        info: Free Delivery Above 999 Taka Order,
                        time: {
                            expected_time: "2025-01-02T20:00:00Z" // Date()
                            actual_minutes: 15,
                            min_minutes: 5,
                            max_minutes: 20,
                        }
                    },
                    {
                        amount: 40,
                        disabled: 0 | 1
                        type: regular
                        info: Free Delivery Above 999 Taka Order,
                        time: {
                            expected_time: "2025-01-02T20:00:00Z" // Date()
                            actual_minutes: 12,
                            min_minutes: 5,
                            max_minutes: 15,
                        }
                    }
                ],
                payment_method: cod | bkash | rocket,
                addition: [
                    {
                        type: extra_cheese,
                        amount: 20,
                        text: Extra Cheese Added
                    },
                    {
                        type: special_instructions,
                        amount: 0,
                        text: Make it spicy
                    }
                ],
                deduction: [
                    {
                        type: general_discount,
                        amount: 20,
                        text: Discount Applied
                    },
                    {
                        type: rounding_off,
                        amount: 2.06,
                        text: Rounding Off
                    }
                ],
                rider_tip: 10,
                store:{
                    storeId: 1
                    locationId:95 
                    min_order_amount: 50,
                    address: 123 Foo Street, FamilyBazar,
                    products{
                        id: 1
                        name: String,
                        description: String,
                        imageUrl: String,
                        pap: 160 // productActualPrice 
                        price: 155,
                        is_available: true,
                        quantity: 1
                    }
                }
                user_details: {
                    id: 1,
                    name: Demo1,
                    number: 018123456789,
                    locationId: 69,
                    address: 456 Street, Dhunot Mor, Kori Gas er pase
                }
            }
