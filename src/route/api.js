const express = require('express');

//routing
const router = express.Router();

//brandController
const brandController = require('../controller/brandController');
router.get('/BrandGet', brandController.BrandGet);
router.post('/BrandPost', brandController.BrandPost);

//cartController
const cartController = require('../controller/cartController');
router.get('/CartGet', cartController.CartGet);
router.post('/CartPost', cartController.CartPost);

//categoryController
const categoryController = require('../controller/categoryController');
router.get('/CategoryGet', categoryController.CategoryGet);
router.post('/CategoryPost', categoryController.CategoryPost);

//featuresController
const featuresController = require('../controller/featuresController');
router.get('/FeaturesGet', featuresController.FeaturesGet);
router.post('/FeaturesPost', featuresController.FeaturesPost);

//invoiceController
const invoiceController = require('../controller/invoiceController');
router.get('/InvoiceGet', invoiceController.InvoiceGet);
router.post('/InvoicePost', invoiceController.InvoicePost);

//invoiceProductController
const invoiceProductController = require('../controller/invoiceProductController');
router.get('/InvoiceProductGet', invoiceProductController.InvoiceProductGet);
router.post('/InvoiceProductPost', invoiceProductController.InvoiceProductPost);

//paymentSettingController
const paymentSettingController = require('../controller/paymentSettingController');
router.get('/PaymentSettingGet', paymentSettingController.PaymentSettingGet);
router.post('/PaymentSettingPost', paymentSettingController.PaymentSettingPost);

//productDetailsController
const productDetailsController = require('../controller/productDetailsController');
router.get('/ProductDetailsGet', productDetailsController.ProductDetailsGet);
router.post('/ProductDetailsPost', productDetailsController.ProductDetailsPost);

//productController
const productController = require('../controller/productController');
router.get('/ProductGet', productController.ProductGet);
router.post('/ProductPost', productController.ProductPost);

//productSliderController
const productSliderController = require('../controller/productSliderController');
router.get('/ProductSliderGet', productSliderController.ProductSliderGet);
router.post('/ProductSliderPost', productSliderController.ProductSliderPost);

//profileController
const profileController = require('../controller/profileController');
router.get('/ProfileGet', profileController.ProfileGet);
router.post('/ProfilePost', profileController.ProfilePost);

//reviewController
const reviewController = require('../controller/reviewController');
router.get('/ReviewGet', reviewController.ReviewGet);
router.post('/ReviewPost', reviewController.ReviewPost);

//userController
const userController = require('../controller/userController');
router.get('/UserGet', userController.UserGet);
router.post('/UserPost', userController.UserPost);

//wishController
const wishController = require('../controller/wishController');
router.get('/WishGet', wishController.WishGet);
router.post('/WishPost', wishController.WishPost);

module.exports = router;