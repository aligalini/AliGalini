const productsData = [
  // shoes
  {
    id: 1,
    title: "کتونی نایک مشکی",
    price: 950,
    alt: "کتونی نایک مشکی",
    imageUrl: "../../assets/images/products/shoes/1.jpg",
    description: "کتونی ساده نایک ذغالی از سایز 38 تا 48",
  },
  {
    id: 2,
    title: "کتونی نایک جردن",
    price: 890,
    alt: "کتونی نایک جردن",
    imageUrl: "../../assets/images/products/shoes/8.jpg",
    description: "کتونی نایک جردن با رنگ سفید سایز 38 تا 46",
  },
  {
    id: 3,
    title: "کتونی نیو بالانس",
    price: 710,
    alt: "کتونی نیو بالانس سبز تیره",
    imageUrl: "../../assets/images/products/shoes/3.jpg",
    description: "کتونی newBalance سبز تیره از سایز های 38 تا 48",
  },
  {
    id: 4,
    title: "کتونی هفت رنگ آدیداس",
    price: 960,
    alt: "کتونی هفت رنگ آدیداس",
    imageUrl: "../../assets/images/products/shoes/4.jpg",
    description: "کتونی هفت رنگ Adidas از سایز های 36 تا 50",
  },
  {
    id: 5,
    title: "کتونی مدل آل استار",
    price: 720,
    alt: "کتونی مدل آل استار سفید",
    imageUrl: "../../assets/images/products/shoes/5.jpg",
    description: "کتونی مدل آل استار سفید از سایز 32 تا 44",
  },
  {
    id: 6,
    title: "کفش نیم بوت چرم",
    price: 990,
    alt: "",
    imageUrl: "../../assets/images/products/shoes/6.jpg",
    description: "",
  },
  {
    id: 7,
    title: "کتونی نایک جردن ایر",
    price: 920,
    alt: "کتونی نایک جردن ایر قرمز سفید",
    imageUrl: "../../assets/images/products/shoes/7.jpg",
    description: "کتونی نایک جردن ایر قرمز سفید با سایز 38 تا 50",
  },
  {
    id: 8,
    title: "کتونی نایک لژ کش دار",
    price: 890,
    alt: "کتونی نایک لژ کش دار طوسی",
    imageUrl: "../../assets/images/products/shoes/2.jpg",
    description: "کتونی نایک لژ کش دار با رنگ طوسی سایز 38 تا 46",
  },
  // shirt
  {
    id: 9,
    title: "هودی مردانه طرح توپاک",
    price: 430,
    alt: "هودی مردانه طرح توپاک",
    imageUrl: "../../assets/images/products/shirt/1.jpg",
    description: "هودی مردانه طرح توپاک سایز sm تا 2xl ",
  },
  {
    id: 10,
    title: "تیشرت طرح نقشه ایران",
    price: 800,
    alt: "تیشرت طرح نقشه ایران",
    imageUrl: "../../assets/images/products/shirt/2.jpg",
    description: "تیشرت نخ پنبه نقشه ایران سایز sm تا 2xl",
  },
  {
    id: 11,
    title: "هودی طرح گل",
    price: 770,
    alt: "هودی طرح گل",
    imageUrl: "../../assets/images/products/shirt/3.jpg",
    description: "هودی طرح گل داخل کرک نسکافه ای ",
  },
  {
    id: 12,
    title: "تیشرت نخ پنبه ساده مشکی",
    price: 300,
    alt: "تیشرت نخ پنبه ساده مشکی",
    imageUrl: "../../assets/images/products/shirt/4.jpg",
    description: "تیشرت نخ پنبه ساده مشکی با متن Muslim energy",
  },
  {
    id: 13,
    title: "تیشرت طرح مجسمه خدایان یونان",
    price: 450,
    alt: "تیشرت طرح مجسمه خدایان یونان",
    imageUrl: "../../assets/images/products/shirt/5.jpg",
    description: "تیشرت سفید طرح مجسمه خدایان یونان لش sm تا 2xl",
  },
  {
    id: 14,
    title: "تیشرت نخ پنبه مشکی طرح توپاک ",
    price: 360,
    alt: "تیشرت نخ پنبه مشکی طرح توپاک ",
    imageUrl: "../../assets/images/products/shirt/6.jpg",
    description: "تیشرت طرح توپاک مشکی با متن all eyes on",
  },
  {
    id: 15,
    title: "هودی داخل کرک سبز",
    price: 550,
    alt: "هودی داخل کرک سبز",
    imageUrl: "../../assets/images/products/shirt/7.jpg",
    description: "هودی داخل کرک سبز با طرح پروانه و متن Glomory",
  },
  {
    id: 16,
    title: "تیشرت های ساده نخی",
    price: 200,
    alt: "تیشرت های ساده نخی",
    imageUrl: "../../assets/images/products/shirt/8.jpg",
    description: "تیشرت های ساده در رنگ های آبی، خاکی، آبی روشن sm تا 2xl ",
  },
  {
    id: 55,
    title: "تیشرت های ساده نخی رنگ روشن",
    price: 200,
    alt: "تیشرت های ساده نخی رنگ روشن",
    imageUrl: "../../assets/images/products/shirt/9.jpg",
    description: "در رنگ های آبی، خاکی، نارنجی، زرشکی با سایز sm تا 2xl",
  },
  {
    id: 56,
    title: "تیشرت های یقه دار ساده",
    price: 200,
    alt: "تیشرت های یقه دار ساده",
    imageUrl: "../../assets/images/products/shirt/10.jpg",
    description: "موجود با رنگ های آبی، سفید، مشکی در سایز بندی sm تا 2xl",
  },
  {
    id: 57,
    title: "تیشرت های مردانه ساده",
    price: 200,
    alt: "تیشرت های مردانه ساده",
    imageUrl: "../../assets/images/products/shirt/11.jpg",
    description:
      "در رنگ بندی های مختلف و تنوع رنگی بالا در سایز بندی sm تا 2xl",
  },
  // pants
  {
    id: 17,
    title: "شلوار اسلش‌ طرح ایموجی",
    price: 480,
    alt: "شلوار اسلش‌ طرح ایموجی",
    imageUrl: "../../assets/images/products/pants/1.jpg",
    description: "شلوار اسلش‌ طرح ایموجی با رنگ مشکی در سایز بندی مختلف",
  },
  {
    id: 18,
    title: "شلوار شش جیب لی ذغالی",
    price: 800,
    alt: "شلوار شش جیب لی ذغالی",
    imageUrl: "../../assets/images/products/pants/2.jpg",
    description: "شلوار دم‌پا کش شش جیب ذغالی ساده",
  },
  {
    id: 19,
    title: "شلوار کتان سفید راسته",
    price: 780,
    alt: "شلوار کتان سفید راسته",
    imageUrl: "../../assets/images/products/pants/3.jpg",
    description: "شلوار کتان ساده سفید مردانه در سایز های ۳۶ تا ۴۸",
  },
  {
    id: 20,
    title: "شلوار پارچه ای ترک",
    price: 940,
    alt: "شلوار پارچه ای ترک",
    imageUrl: "../../assets/images/products/pants/4.jpg",
    description: "شلوار مجلسی مردانه پارچه ترک ساده با رنگ مشکی",
  },
  {
    id: 21,
    title: "شلوار لی آبی جذب مردانه",
    price: 620,
    alt: "شلوار لی آبی جذب مردانه",
    imageUrl: "../../assets/images/products/pants/5.jpg",
    description: "شلوار لی جذب آبی مردان با جنس نخ کش",
  },
  {
    id: 22,
    title: "شلوار لی پاکتی نسکافه ای",
    price: 910,
    alt: "شلوار لی پاکتی نسکافه ای",
    imageUrl: "../../assets/images/products/pants/6.jpg",
    description: "شلوار لی پاکتی مردانه با سایز ۳۲ تا ۵۲",
  },
  {
    id: 23,
    title: "شلوار شش جیب مشکی",
    price: 740,
    alt: "شلوار شش جیب مشکی",
    imageUrl: "../../assets/images/products/pants/7.jpg",
    description: "شلوار شش جیب مردانه مشکی لی پارچه ترک",
  },
  {
    id: 24,
    title: "انواع شلوار لی مردانه",
    price: 760,
    alt: "انواع شلوار لی مردانه",
    imageUrl: "../../assets/images/products/pants/8.jpg",
    description: "انواع شلوار لی مردانه تک سایز ۴۲ با رنگ های مختلف",
  },
  {
    id: 25,
    title: "شلوار لی پاکتی مشکی",
    price: 850,
    alt: "شلوار لی پاکتی مشکی",
    imageUrl: "../../assets/images/products/pants/9.jpg",
    description: "شلوار لی مشکی مردانه پارچه ترک تک سایز",
  },
  // hat
  {
    id: 26,
    title: "کلاه لی طوسی طرح نخل",
    price: 300,
    alt: "کلاه لی طوسی طرح نخل",
    imageUrl: "../../assets/images/products/hat/1.jpg",
    description: "کلاه کاملا قابل شستشو می‌باشد.",
  },
  {
    id: 27,
    title: "کلاه لی‌ آبی طرح شیکاگو",
    price: 250,
    alt: "کلاه لی‌ آبی طرح شیکاگو",
    imageUrl: "../../assets/images/products/hat/2.jpg",
    description: "کلاه کاملا قابل شستشو می‌باشد.",
  },
  {
    id: 28,
    title: "کلاه بافت نارنجی ساده",
    price: 380,
    alt: "کلاه بافت نارنجی ساده",
    imageUrl: "../../assets/images/products/hat/3.jpg",
    description: "کلاه بافت نارنجی ساده اسپرت با رنگ های مختلف",
  },
  {
    id: 29,
    title: "کلاه ساده طوسی",
    price: 260,
    alt: "کلاه ساده طوسی",
    imageUrl: "../../assets/images/products/hat/5.jpg",
    description: "کلاه کاملا قابل شستشو می‌باشد.",
  },
  {
    id: 30,
    title: "کلاه دات آبی روشن کتان",
    price: 290,
    alt: "کلاه دات آبی روشن کتان",
    imageUrl: "../../assets/images/products/hat/6.jpg",
    description: "کلاه کاملا قابل شستشو می‌باشد.",
  },
  {
    id: 31,
    title: "کلاه بافت با رنگ های مختلف",
    price: 330,
    alt: "کلاه بافت با رنگ های مختلف",
    imageUrl: "../../assets/images/products/hat/7.jpg",
    description: "کلا داخل کرک و کاملا قابل شستشو می‌باشد.",
  },
  {
    id: 32,
    title: "کلاه لی‌ طوسی",
    price: 350,
    alt: "کلاه لی‌ طوسی",
    imageUrl: "../../assets/images/products/hat/8.jpg",
    description: "این کلاه قابل شستشو به صورت عادی نیست.",
  },
  {
    id: 33,
    title: " کلاه کتان شتری",
    price: 250,
    alt: " کلاه کتان شتری",
    imageUrl: "../../assets/images/products/hat/9.jpg",
    description: "این کلاه باید با آب سرد شسته شود.",
  },
  // accessory
  {
    id: 34,
    title: "عینک اسپرت مردانه",
    price: 430,
    alt: "عینک اسپرت مردانه",
    imageUrl: "../../assets/images/products/accessory/1.jpg",
    description: "عینک دودی شیشه نشکن و ضد خش مردانه",
  },
  {
    id: 35,
    title: "رینگ ساده ست  نقره",
    price: 360,
    alt: "رینگ ساده ست  نقره",
    imageUrl: "../../assets/images/products/accessory/2.jpg",
    description: "رینگ ساده ست زن و مرد نقره سایز ۷ تا ۱۵",
  },
  {
    id: 36,
    title: "عینک یکدست شیشه براق",
    price: 700,
    alt: "عینک یکدست شیشه براق",
    imageUrl: "../../assets/images/products/accessory/3.jpg",
    description: "عینک مردانه یکدست شیشه براق طرح رعد",
  },
  {
    id: 37,
    title: "گردنبند طرح تاج",
    price: 485,
    alt: "گردنبند طرح تاج",
    imageUrl: "../../assets/images/products/accessory/4.jpg",
    description: "گردنبند استیل طلایی طرح تاج",
  },
  {
    id: 38,
    title: "عینک دودی شیشه مشکی",
    price: 460,
    alt: "عینک دودی شیشه مشکی",
    imageUrl: "../../assets/images/products/accessory/5.jpg",
    description: "عینک مردانه شیشه مشکی با فریم‌ گرد",
  },
  {
    id: 39,
    title: "عینک آفتابی طرح وسط چرم",
    price: 420,
    alt: "عینک آفتابی طرح وسط چرم",
    imageUrl: "../../assets/images/products/accessory/6.jpg",
    description: "عینک ضد خش و نشکن ساده فریم طلایی",
  },
  {
    id: 40,
    title: "دست بند چرم",
    price: 380,
    alt: "دست بند چرم",
    imageUrl: "../../assets/images/products/accessory/7.jpg",
    description: "دست بند چرم مردانه طرح قطب نما",
  },
  {
    id: 41,
    title: "کمربند چرم ساده",
    price: 200,
    alt: "کمربند چرم ساده",
    imageUrl: "../../assets/images/products/accessory/8.jpg",
    description: "کمربند ساده چرم با رنگ مشکی و سگک ساده",
  },
  {
    id: 42,
    title: "انگشتر عقیق",
    price: 100,
    alt: "انگشتر عقیق",
    imageUrl: "../../assets/images/products/accessory/9.jpg",
    description: "انگشتر عقیق مردانه سوری سایز ۷ تا ۱۷",
  },
  {
    id: 43,
    title: "انگشتر فیروزه مردانه",
    price: 200,
    alt: "انگشتر فیروزه مردانه",
    imageUrl: "../../assets/images/products/accessory/10.jpg",
    description: "انگشتر فیروزه نیشابور مردانه سایز ۶ تا ۱۴",
  },
  {
    id: 44,
    title: "انگشتر عقیق مردانه",
    price: 150,
    alt: "انگشتر عقیق مردانه",
    imageUrl: "../../assets/images/products/accessory/11.jpg",
    description: "انگشتر عقیق ساده مردانه دارای فریم‌ دست ساز",
  },
  {
    id: 45,
    title: "گردنبند صلیب وایکینگ",
    price: 100,
    alt: "گردنبند صلیب وایکینگ",
    imageUrl: "../../assets/images/products/accessory/12.jpg",
    description: "گردنبند چوبی صلیب وایکینگ به همراه زنجیر‌",
  },
  // watch
  {
    id: 46,
    title: "ساعت چرم تیسات‌",
    price: 710,
    alt: "ساعت چرم تیسات‌",
    imageUrl: "../../assets/images/products/watch/1.jpg",
    description: "ساعت چرم پوست ماری صفحه سفید تیسات‌ مردانه",
  },
  {
    id: 47,
    title: "ساعت چرم جنوا",
    price: 580,
    alt: "ساعت چرم جنوا",
    imageUrl: "../../assets/images/products/watch/2.jpg",
    description: "ساعت چرم مشکی صفحه مشکی مردانه‌ جنوا",
  },
  {
    id: 48,
    title: "ساعت فریم اسپرت فسیل",
    price: 610,
    alt: "ساعت فریم اسپرت فسیل",
    imageUrl: "../../assets/images/products/watch/3.jpg",
    description: "ساعت بند چرم و فریم اسپرت صفحه سفید فسیل",
  },
  {
    id: 49,
    title: "ساعت طرح اپل واچ",
    price: 350,
    alt: "ساعت طرح اپل واچ",
    imageUrl: "../../assets/images/products/watch/4.jpg",
    description: "دارای بند برزنتی و ضد آب و گارانتی ISO5",
  },
  {
    id: 50,
    title: "ساعت شیائومی",
    price: 960,
    alt: "ساعت شیائومی",
    imageUrl: "../../assets/images/products/watch/5.jpg",
    description: "ساعت شیائومی با هایپر او اس ۲",
  },
  {
    id: 51,
    title: "ساعت طرح اپل واچ",
    price: 370,
    alt: "ساعت طرح اپل واچ",
    imageUrl: "../../assets/images/products/watch/6.jpg",
    description: "دارای بند سیلیکونی و شیشه ضد خش",
  },
  {
    id: 52,
    title: "ساعت رولکس مردانه",
    price: 600,
    alt: "ساعت رولکس مردانه",
    imageUrl: "../../assets/images/products/watch/7.jpg",
    description: "ساعت نقره ای رولکس مردانه",
  },
  {
    id: 53,
    title: "ساعت رولکس طلایی",
    price: 500,
    alt: "ساعت رولکس طلایی",
    imageUrl: "../../assets/images/products/watch/8.jpg",
    description: "ساعت رولکس مردانه طلایی با بند اضافی",
  },
  {
    id: 54,
    title: "ساعت طرح چوب زنانه",
    price: 720,
    alt: "ساعت طرح چوب زنانه",
    imageUrl: "../../assets/images/products/watch/9.jpg",
    description: "ساعت صفحه سفید ساده زنانه طرح چوب",
  },
];

// variable's
const CartBtn = document.querySelector(".Cart");
const cartContent = document.querySelector(".cart-content");
const indicator = document.querySelector(".indicator-item");
const bgCartWindow = document.querySelector(".cart-reView");
const Modal = document.querySelector(".modal");
const closeModal = document.querySelector("#closeCartModal");
const productsDOM = document.querySelector(".products-center");
const totalPriceCart = document.querySelector(".total-price");
const clearCart = document.querySelector(".clear-cart");

// cart is null array
let cart = [];

// BTN in null array
let buttonsDOM = [];

// class Product's
class Products {
  // give Data from DataBase
  getProduct() {
    return productsData;
  }
}

// class Ui and DOM
class Ui {
  // Upload Product's in DOM form DataBase
  displayProducts(products) {
    let result = [];

    // show Product's in the DOM
    products.forEach(item => {
      result += `<div class="card bg-base-100 w-86 shadow-xl">
          <figure>
            <img
              src=${item.imageUrl}
              alt=${item.alt}
              class="w-full max-h-72"
            />
          </figure>
          <div class="card-body flex flex-auto items-end justify-start">
            <h2 class="card-title">${item.title}</h2>
            <p class="text-blue-600 font-bold flex flex-row-reverse items-center justify-start">
              ${item.price}
              <span class="px-1 font-medium text-neutral-500 text-xs">
                تومانء
              </span>
            </p>
            <p
              style="direction: rtl"
              class="text-right text-sm font-medium">
              ${item.description}
            </p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary py-2 px-5 text-sm add-to-cart" data-id=${item.id}>افزودن به سبد خرید</button>
            </div>
          </div>
        </div>`;
      productsDOM.innerHTML = result;
    });
  }
  // click and add to cart
  getAddToCartBtns() {
    const addToCartBtn = [...document.querySelectorAll(".add-to-cart")];
    buttonsDOM = addToCartBtn;
    const buttons = addToCartBtn;
    buttons.forEach(btn => {
      const id = btn.dataset.id;
      const isInCart = cart.find(product => product.id === parseInt(id));

      // condition is true has includes Product in Cart
      if (isInCart) {
        btn.innerText = "افزوده شد";
        btn.disabled = true; // Corrected from btn.Disabled to btn.disabled
      }
      btn.addEventListener("click", event => {
        event.target.innerText = "افزوده شد";
        event.target.disabled = true;

        // get product from Products
        const addedProduct = { ...Storage.getProduct(id), quantity: 1 };

        // add to cart
        cart = [...cart, addedProduct];

        // save cart to localStorage
        Storage.saveCart(cart);

        // update cart value
        this.setCartValue(cart);

        // add to cart item
        this.addCartItem(addedProduct);
      });
    });
  }
  // add value in cart badge
  setCartValue(cart) {
    let tempCartItems = 0;
    const TotalPrice = cart.reduce((acc, curr) => {
      tempCartItems += curr.quantity;
      return acc + curr.quantity * curr.price;
    }, 0);
    totalPriceCart.innerHTML = `
      <div class="w-full h-fit container flex flex-row items-center justify-start text-right font-semibold text-neutral-600" style="direction: rtl">
        <div class="flex flex-row items-center justify-center">
          <span class="flex flex-row items-center justify-center">
            <p class="text-lg font-bold total-price">${TotalPrice.toFixed(
              3
            ).split(".", 3)}</p>
          </span>
        </div>
      </div>`;
    indicator.innerText = tempCartItems;
  }
  // add product in the cart
  addCartItem(cartItem) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <div class="w-full h-fit py-2 flex flex-row-reverse justify-between">
        <div class="flex flex-row gap-2 items-end justify-end">
          <div class="w-36 lg:w-60 md:w-60 h-20 flex flex-col items-end justify-start">
            <h1 class="font-semibold text-lg text-neutral-800 pb-1">${cartItem.title}</h1>
            <span class="text-neutral-500 text-md font-medium text-right inline-flex">
              تومانء
              <p class="">${cartItem.price}</p>
            </span>
          </div>
          <div class="bg-none w-20 h-20 rounded-xl">
            <img src=${cartItem.imageUrl} alt=${cartItem.alt} class="w-full h-full rounded-xl" />
          </div>
        </div>
      </div>
      <div class="w-16 h-fit flex flex-row items-center justify-between">
        <div class="w-fit h-20 flex flex-row items-center justify-center">
          <i class="fa-duotone fa-solid fa-trash fa-lg cursor-pointer" data-id=${cartItem.id} style="color: #fe3957"></i>
        </div>
        <div class="w-10 h-fit flex flex-col items-center justify-center">
          <i class="fa-solid fa-angle-up fa-xl cursor-pointer" data-id=${cartItem.id} style="color: #5c5eed"></i>
          <p class="quantity pt-5 pb-3 font-semibold text-lg">${cartItem.quantity}</p>
          <i class="fa-solid fa-angle-down fa-xl cursor-pointer" data-id=${cartItem.id} style="color: #fe3957"></i>
        </div>
      </div>`;
    cartContent.appendChild(div);
  }
  // load product and badge in the DOM
  setupApp() {
    // get cart from Storage
    cart = Storage.getCart() || [];
    // addCartItem
    cart.forEach(cartItem => this.addCartItem(cartItem));
    // set value: price + item
    this.setCartValue(cart);
  }
  // clear Product item in the Cart
  cartLogic() {
    // clear cart BTN
    clearCart.addEventListener("click", () => {
      cart.forEach(cartItem => this.removeItem(cartItem.id));
      // remove cart content children
      while (cartContent.children.length) {
        cartContent.removeChild(cartContent.children[0]);
      }
      this.setCartValue(cart);
    });

    // cart functionality: dec - inc
    cartContent.addEventListener("click", event => {
      if (event.target.classList.contains("fa-angle-up")) {
        const addQuantity = event.target;

        // get item from cart
        const addedItem = cart.find(
          cItem => cItem.id == addQuantity.dataset.id
        );
        addedItem.quantity++;

        // update cart value
        this.setCartValue(cart);

        //save cart
        Storage.saveCart(cart);

        // update cart item in DOM
        addQuantity.nextElementSibling.innerText = addedItem.quantity;
      } else if (event.target.classList.contains("fa-trash")) {
        const removeItem = event.target;
        const _removedItem = cart.find(c => c.id == removeItem.dataset.id);
        this.removeItem(_removedItem.id);
        Storage.saveCart(cart);
        const cartItemElement = removeItem.closest(".cart-item");
        if (cartItemElement) {
          cartContent.removeChild(cartItemElement);
        }
        this.setCartValue(cart);
      } else if (event.target.classList.contains("fa-angle-down")) {
        const subQuantity = event.target;
        const substractedItem = cart.find(c => c.id == subQuantity.dataset.id);
        if (substractedItem.quantity === 1) {
          this.removeItem(substractedItem.id);
          const cartItemElement = subQuantity.closest(".cart-item");
          if (cartItemElement) {
            cartContent.removeChild(cartItemElement);
            return;
          }
        } else {
          substractedItem.quantity--;
          // update cart value
          this.setCartValue(cart);

          //save cart
          Storage.saveCart(cart);

          // update cart item in DOM
          subQuantity.previousElementSibling.innerText =
            substractedItem.quantity;
        }
      }
    });
  }
  // remove Item
  removeItem(id) {
    // update cart
    cart = cart.filter(cItem => cItem.id !== id);

    // total price and cart Item Update
    this.setCartValue(cart);

    // update Storage
    Storage.saveCart(cart);

    this.getSingleButton(id);
  }

  // update text and disable buttons
  getSingleButton(id) {
    const button = buttonsDOM.find(btn => btn.dataset.id == parseInt(id));
    button.innerText = "افزودن به سبد خرید";
    button.disabled = false;
  }
}

// class Storage and LocalStorage
class Storage {
  // get products to save local
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  // get Product in Cart
  static getProduct(id) {
    const _products = JSON.parse(localStorage.getItem("products"));
    return _products
      ? _products.find(product => product.id === parseInt(id))
      : [];
  }
  // save cart
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  // get cart
  static getCart() {
    return JSON.parse(localStorage.getItem("cart"));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new Ui();
  ui.setupApp();
  ui.displayProducts(productsData);
  ui.getAddToCartBtns();
  ui.cartLogic(cart);
  Storage.saveProducts(productsData);
});

CartBtn.addEventListener("click", () => {
  bgCartWindow.classList.remove("hidden");
  Modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  bgCartWindow.classList.add("hidden");
});
